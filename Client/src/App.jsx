
// Import React and the useState hook for mobile navigation.
import React, { useState } from "react";

// Import icons used throughout the landing page.
import {
    Activity,
    ArrowRight,
    Brain,
    CalendarDays,
    CheckCircle2,
    ChevronRight,
    FileText,
    HeartPulse,
    LockKeyhole,
    Menu,
    ShieldCheck,
    Stethoscope,
    X,
} from "lucide-react";

import { Routes, Route, Link } from "react-router-dom";

// Import the page-specific stylesheet.
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

// Store the main platform features in one reusable array.
const features = [
    {
        icon: Brain,
        title: "AI Health Assistance",
        description:
            "Support users with AI-powered healthcare information and assistance.",
    },
    {
        icon: FileText,
        title: "Medical Report Management",
        description:
            "Organize and manage healthcare reports through a digital platform.",
    },
    {
        icon: CalendarDays,
        title: "Appointment Management",
        description:
            "Make healthcare appointments easier to organize and manage.",
    },
    {
        icon: HeartPulse,
        title: "Health Monitoring",
        description:
            "Keep relevant health information organized in one place.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Health Records",
        description:
            "Provide a centralized platform for managing personal health records.",
    },
    {
        icon: Stethoscope,
        title: "Integrated Healthcare",
        description:
            "Bring important healthcare services together in one system.",
    },
];

// Store the three basic steps for using the platform.
const steps = [
    {
        number: "01",
        title: "Create an Account",
        description: "Register to access the MedCare platform.",
    },
    {
        number: "02",
        title: "Access Healthcare Services",
        description: "Explore the available healthcare management features.",
    },
    {
        number: "03",
        title: "Manage Your Health",
        description: "Use the platform to organize your healthcare information.",
    },
];

// Main landing page component.
function App() {
    // Track whether the mobile navigation menu is open.
    const [menuOpen, setMenuOpen] = useState(false);

    // Close the mobile menu when a navigation link is selected.
    const closeMenu = () => setMenuOpen(false);

   return (
    <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
            <div className="app">

            {/* ================= NAVBAR ================= */}
            <header className="navbar">
                <div className="container navbar-inner">

                    {/* Brand logo and project name. */}
                    <a href="#home" className="brand" onClick={closeMenu}>
                        <span className="brand-icon">
                            <HeartPulse size={24} />
                        </span>
                        <span>MedCare</span>
                    </a>

                    {/* Mobile menu toggle button. */}
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? <X size={23} /> : <Menu size={23} />}
                    </button>

                    {/* Main navigation links. */}
                    <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <a href="#home" onClick={closeMenu}>Home</a>
                        <a href="#features" onClick={closeMenu}>Features</a>
                        <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
                        <a href="#about" onClick={closeMenu}>About</a>

                        {/* Authentication links are placeholders until login pages are built. */}
                        <div className="nav-actions">
                            <Link to="/login" className="login-link" onClick={closeMenu}>
                               Login
                            </Link>
                            <Link to="/signup" className="register-btn" onClick={closeMenu}>
                                 Get Started <ArrowRight size={16} />
                             </Link>
                        </div>
                    </nav>
                </div>
            </header>

            <main>

                {/* ================= HERO SECTION ================= */}
                <section className="hero" id="home">
                    <div className="container hero-grid">

                        {/* Hero text content. */}
                        <div className="hero-content">
                            <div className="hero-label">
                                <span className="status-dot"></span>
                                AI-POWERED HEALTHCARE PLATFORM
                            </div>

                            <h1>
                                MedCare – AI-Powered Integrated
                                <span> Healthcare Management System</span>
                            </h1>

                            <p className="hero-description">
                                A smart and integrated healthcare management platform
                                designed to bring healthcare information and services
                                together through modern web technologies and Artificial
                                Intelligence.
                            </p>

                            <div className="hero-actions">
                                <a href="#features" className="primary-btn">
                                    Explore Features <ArrowRight size={17} />
                                </a>
                                <a href="#about" className="secondary-btn">
                                    Learn More <ChevronRight size={17} />
                                </a>
                            </div>

                            <div className="hero-trust">
                                <ShieldCheck size={17} />
                                <span>Integrated Healthcare Management</span>
                            </div>
                        </div>

                        {/* CSS-based healthcare dashboard illustration. */}
                        <div className="hero-visual">
                            <div className="dashboard-card">

                                <div className="dashboard-header">
                                    <div>
                                        <span className="dashboard-caption">MEDCARE OVERVIEW</span>
                                        <h3>Health Dashboard</h3>
                                    </div>
                                    <div className="dashboard-icon">
                                        <Activity size={21} />
                                    </div>
                                </div>

                                <div className="welcome-card">
                                    <div>
                                        <span>Welcome to</span>
                                        <h3>Smarter Healthcare</h3>
                                        <p>One platform for your healthcare needs.</p>
                                    </div>
                                    <div className="welcome-icon">
                                        <HeartPulse size={32} />
                                    </div>
                                </div>

                                <div className="dashboard-section-title">
                                    Healthcare Services
                                </div>

                                <div className="dashboard-services">
                                    <div className="mini-service">
                                        <span className="mini-icon blue">
                                            <Brain size={19} />
                                        </span>
                                        <div>
                                            <strong>AI Assistance</strong>
                                            <small>Smart support</small>
                                        </div>
                                        <ChevronRight size={16} />
                                    </div>

                                    <div className="mini-service">
                                        <span className="mini-icon green">
                                            <FileText size={19} />
                                        </span>
                                        <div>
                                            <strong>Health Records</strong>
                                            <small>Digital management</small>
                                        </div>
                                        <ChevronRight size={16} />
                                    </div>

                                    <div className="mini-service">
                                        <span className="mini-icon purple">
                                            <CalendarDays size={19} />
                                        </span>
                                        <div>
                                            <strong>Appointments</strong>
                                            <small>Easy organization</small>
                                        </div>
                                        <ChevronRight size={16} />
                                    </div>
                                </div>

                                <div className="dashboard-footer">
                                    <LockKeyhole size={15} />
                                    <span>Healthcare information in one platform</span>
                                    <CheckCircle2 size={16} />
                                </div>
                            </div>

                            {/* Decorative floating element. */}
                            <div className="floating-badge">
                                <span className="floating-icon">
                                    <HeartPulse size={20} />
                                </span>
                                <div>
                                    <strong>MedCare</strong>
                                    <small>Integrated Healthcare</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= FEATURES SECTION ================= */}
                <section className="features-section section" id="features">
                    <div className="container">

                        <div className="section-heading">
                            <span className="section-label">OUR FEATURES</span>
                            <h2>Healthcare Made More Connected</h2>
                            <p>
                                Explore the key capabilities of the MedCare healthcare
                                management platform.
                            </p>
                        </div>

                        <div className="features-grid">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <article className="feature-card" key={index}>
                                        <div className="feature-icon">
                                            <Icon size={23} />
                                        </div>

                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>

                                        <a href="#about" className="feature-link">
                                            Learn more <ArrowRight size={15} />
                                        </a>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ================= HOW IT WORKS ================= */}
                <section className="how-section section" id="how-it-works">
                    <div className="container">

                        <div className="section-heading">
                            <span className="section-label">SIMPLE PROCESS</span>
                            <h2>How MedCare Works</h2>
                            <p>
                                A simple approach to accessing an integrated
                                healthcare management platform.
                            </p>
                        </div>

                        <div className="steps-grid">
                            {steps.map((step, index) => (
                                <article className="step-card" key={index}>
                                    <span className="step-number">{step.number}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= ABOUT SECTION ================= */}
                <section className="about-section section" id="about">
                    <div className="container about-grid">

                        <div className="about-visual">
                            <div className="about-main-icon">
                                <HeartPulse size={65} />
                            </div>
                            <div className="about-small-card">
                                <ShieldCheck size={20} />
                                <span>Integrated Healthcare Platform</span>
                            </div>
                        </div>

                        <div className="about-content">
                            <span className="section-label">ABOUT THE PROJECT</span>

                            <h2>
                                Bringing Technology and Healthcare Together
                            </h2>

                            <p>
                                MedCare – AI-Powered Integrated Healthcare Management
                                System is designed to improve the organization and
                                accessibility of healthcare-related services through
                                a centralized digital platform.
                            </p>

                            <p>
                                By combining modern web development technologies
                                with Artificial Intelligence, the project aims to
                                provide a more connected and convenient healthcare
                                management experience.
                            </p>

                            <div className="about-points">
                                <div>
                                    <CheckCircle2 size={18} />
                                    <span>Centralized healthcare management</span>
                                </div>
                                <div>
                                    <CheckCircle2 size={18} />
                                    <span>AI-supported platform capabilities</span>
                                </div>
                                <div>
                                    <CheckCircle2 size={18} />
                                    <span>Modern and user-friendly interface</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= CTA SECTION ================= */}
                <section className="cta-section">
                    <div className="container cta-inner">
                        <div>
                            <span>MEDCARE HEALTHCARE PLATFORM</span>
                            <h2>Experience a More Connected Healthcare System</h2>
                            <p>
                                Discover the features of an integrated healthcare
                                management platform.
                            </p>
                        </div>

                        <a href="#features" className="cta-btn">
                            Explore MedCare <ArrowRight size={17} />
                        </a>
                    </div>
                </section>
            </main>

            {/* ================= FOOTER ================= */}
            <footer className="footer">
                <div className="container footer-inner">

                    <a href="#home" className="brand footer-brand">
                        <span className="brand-icon">
                            <HeartPulse size={22} />
                        </span>
                        <span>MedCare</span>
                    </a>

                    <p>
                        AI-Powered Integrated Healthcare Management System
                    </p>

                    <span className="copyright">
                        © {new Date().getFullYear()} MedCare. All rights reserved.
                    </span>
                </div>
            </footer>            
            </div>
        } />
    </Routes>
    );
}
// Export the landing page for use in the React application.
export default App;
