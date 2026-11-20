
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    HeartPulse,
    Mail,
    LockKeyhole,
    Eye,
    EyeOff,
    ArrowRight
} from "lucide-react";

import "./Login.css";

function Login() {
    // Store the login form values.
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Control password visibility.
    const [showPassword, setShowPassword] = useState(false);

    // Update form values when the user types.
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle login form submission.
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login functionality will be connected to the backend later.");
    };

    return (
        <div className="login-page">

            <div className="login-container">

                {/* MedCare branding */}
                <Link to="/" className="login-brand">
                    <span className="login-brand-icon">
                        <HeartPulse size={25} />
                    </span>
                    <span>MedCare</span>
                </Link>

                {/* Login heading */}
                <div className="login-heading">
                    <h1>Welcome Back</h1>
                    <p>Sign in to access your healthcare account.</p>
                </div>

                {/* Login form */}
                <form onSubmit={handleSubmit}>

                    <div className="login-field">
                        <label htmlFor="email">Email Address</label>

                        <div className="login-input-wrapper">
                            <Mail size={19} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="login-field">
                        <label htmlFor="password">Password</label>

                        <div className="login-input-wrapper">
                            <LockKeyhole size={19} />

                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility"
                            >
                                {showPassword
                                    ? <EyeOff size={19} />
                                    : <Eye size={19} />
                                }
                            </button>
                        </div>
                    </div>

                    <div className="login-options">
                        <label className="remember-option">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="login-submit-btn">
                        Sign In <ArrowRight size={17} />
                    </button>

                </form>

                {/* Registration link */}
                <p className="register-prompt">
                    Don't have an account?
                    <Link to="/signup"> Create Account</Link>
                </p>

                <div className="login-security">
                    <LockKeyhole size={15} />
                    Secure Healthcare Access
                </div>

            </div>
        </div>
    );
}

export default Login;
