
// Import Mongoose to define the user schema.
const mongoose = require("mongoose");

// Define the schema for all MedCare users.
const userSchema = new mongoose.Schema(
    {
        // Store the user's full name.
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        // Store the user's email address.
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        // Store the user's contact number.
        phone: {
            type: String,
            required: true,
            trim: true
        },

        // Store the securely hashed password.
        password: {
            type: String,
            required: true,
            minlength: 8
        },

        // Define the user's role in the system.
        role: {
            type: String,
            enum: ["Patient", "Doctor", "Admin"],
            default: "Patient",
            required: true
        },

        // Track the user's account approval status.
        accountStatus: {
            type: String,
            enum: ["Pending", "Active", "Rejected"],
            default: "Active"
        },

        // Track whether the doctor has been verified.
        isVerified: {
            type: Boolean,
            default: false
        },

        // Store the doctor's medical specialization.
        specialization: {
            type: String,
            trim: true,
            default: ""
        },

        // Store the doctor's educational qualification.
        qualification: {
            type: String,
            trim: true,
            default: ""
        },

        // Store the doctor's professional license number.
        licenseNumber: {
            type: String,
            trim: true,
            default: ""
        }
    },

    // Automatically maintain creation and update timestamps.
    {
        timestamps: true
    }
);

// Export the User model for use in other backend files.
const User = mongoose.model("User", userSchema);

module.exports = User;
