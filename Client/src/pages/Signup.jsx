
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    HeartPulse,
    User,
    Mail,
    Phone,
    LockKeyhole,
    Eye,
    EyeOff,
    UserRoundPlus
} from "lucide-react";

import "./Signup.css";

function Signup() {
    // Store all registration form values.
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        role: "Patient",
        password: "",
        confirmPassword: ""
    });

    // Control password visibility.
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Update form values.
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Validate and handle registration.
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration UI completed! Backend connection will be added later.");
    };

    return (
        <div className="signup-page">
            <div className="signup-container">

                {/* MedCare branding */}
                <Link to="/" className="signup-brand">
                    <span className="signup-brand-icon">
                        <HeartPulse size={25} />
                    </span>
                    <span>MedCare</span>
                </Link>

                {/* Signup heading */}
                <div className="signup-heading">
                    <h1>Create Your Account</h1>
                    <p>Join MedCare for smarter healthcare management.</p>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* Full name */}
                    <div className="signup-field">
                        <label htmlFor="fullName">Full Name</label>
                        <div className="signup-input-wrapper">
                            <User size={18} />
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Email address */}
                    <div className="signup-field">
                        <label htmlFor="signup-email">Email Address</label>
                        <div className="signup-input-wrapper">
                            <Mail size={18} />
                            <input
                                type="email"
                                id="signup-email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Phone number */}
                    <div className="signup-field">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="signup-input-wrapper">
                            <Phone size={18} />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Account role */}
                    <div className="signup-field">
                        <label htmlFor="role">Register As</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="Patient">Patient</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                    </div>

                    {/* Password */}
                    <div className="signup-field">
                        <label htmlFor="signup-password">Password</label>
                        <div className="signup-input-wrapper">
                            <LockKeyhole size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="signup-password"
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                minLength={8}
                                required
                            />
                            <button
                                type="button"
                                className="signup-password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm password */}
                    <div className="signup-field">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="signup-input-wrapper">
                            <LockKeyhole size={18} />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                minLength={8}
                                required
                            />
                            <button
                                type="button"
                                className="signup-password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                aria-label="Toggle confirm password visibility"
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit registration */}
                    <button type="submit" className="signup-submit-btn">
                        <UserRoundPlus size={18} />
                        Create Account
                    </button>

                </form>

                {/* Login navigation */}
                <p className="signup-login-prompt">
                    Already have an account?
                    <Link to="/login"> Sign In</Link>
                </p>

                <div className="signup-security">
                    <LockKeyhole size={15} />
                    Secure Healthcare Registration
                </div>

            </div>
        </div>
    );
}

export default Signup;
