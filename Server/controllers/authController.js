
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate a JWT token for authenticated users.
const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );
};

// Register a new Patient or Doctor account.
const registerUser = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            password,
            confirmPassword,
            role,
            specialization,
            qualification,
            licenseNumber
        } = req.body;

        // Validate required registration fields.
        if (!fullName || !email || !phone || !password || !confirmPassword || !role) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields."
            });
        }

        // Allow public registration only for Patients and Doctors.
        if (!["Patient", "Doctor"].includes(role)) {
            return res.status(403).json({
                success: false,
                message: "Invalid registration role."
            });
        }

        // Check whether the passwords match.
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match."
            });
        }

        // Enforce a minimum password length.
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must contain at least 8 characters."
            });
        }

        // Check whether the email is already registered.
        const existingUser = await User.findOne({
            email: email.trim().toLowerCase()
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists."
            });
        }

        // Validate additional details required for Doctor registration.
        if (role === "Doctor") {
            if (!specialization || !qualification || !licenseNumber) {
                return res.status(400).json({
                    success: false,
                    message: "Doctor qualification, specialization and license number are required."
                });
            }

            const existingLicense = await User.findOne({
                licenseNumber: licenseNumber.trim()
            });

            if (existingLicense) {
                return res.status(409).json({
                    success: false,
                    message: "This license number is already registered."
                });
            }
        }

        // Hash the password before saving it.
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create the new user account.
        const newUser = await User.create({
            fullName: fullName.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            password: hashedPassword,
            role,

            // Doctors must be approved by Admin before activation.
            accountStatus: role === "Doctor" ? "Pending" : "Active",
            isVerified: false,

            specialization: role === "Doctor" ? specialization.trim() : "",
            qualification: role === "Doctor" ? qualification.trim() : "",
            licenseNumber: role === "Doctor" ? licenseNumber.trim() : ""
        });

        // Return a safe response without exposing the password.
        return res.status(201).json({
            success: true,
            message: role === "Doctor"
                ? "Registration successful. Your account is waiting for Admin verification."
                : "Patient registration successful.",
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                role: newUser.role,
                accountStatus: newUser.accountStatus
            }
        });

    } catch (error) {
        console.error("Registration Error:", error);

        return res.status(500).json({
            success: false,
            message: "Registration failed. Please try again."
        });
    }
};

// Authenticate an existing user.
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate login fields.
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            });
        }

        // Find the user using their email address.
        const user = await User.findOne({
            email: email.trim().toLowerCase()
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Verify the submitted password against the stored hash.
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Block Doctors until Admin approval.
        if (user.role === "Doctor" && user.accountStatus !== "Active") {
            return res.status(403).json({
                success: false,
                message: user.accountStatus === "Rejected"
                    ? "Your Doctor account has been rejected. Please contact Admin."
                    : "Your Doctor account is awaiting Admin verification.",
                accountStatus: user.accountStatus
            });
        }

        // Block accounts that are not active.
        if (user.accountStatus !== "Active") {
            return res.status(403).json({
                success: false,
                message: "Your account is not active. Please contact Admin."
            });
        }

        // Generate a signed authentication token.
        const token = generateToken(user);

        // Return user details and authentication token.
        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                role: user.role,
                accountStatus: user.accountStatus
            }
        });

    } catch (error) {
        console.error("Login Error:", error);

        return res.status(500).json({
            success: false,
            message: "Login failed. Please try again."
        });
    }
};

// Export authentication controller functions.
module.exports = {
    registerUser,
    loginUser
};
