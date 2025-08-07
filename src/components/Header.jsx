import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/PG.png';
import '../HFCSS/header.css';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            {/* Top Download Message */}
            <section id="top-bar">
                <p id="download-text">
                    Download the App & Receive <strong>777+ bonus</strong> Every day!
                </p>
                <button id="download_btn">Download!</button>
            </section>

            {/* Navigation Section */}
            <section id="nav-container">
                {/* Left - Logo */}
                <div id="nav-left">
                    <Link to="/">
                        <img src={Logo} alt="Logo" id="logo-img" />
                    </Link>
                </div>

                {/* Hamburger button (for mobile) */}
                <button
                    className="mobile-toggle-btn"
                    onClick={toggleMobileMenu}
                >
                    <i id='changemycolor' className="fa-solid fa-bars"></i>
                </button>

                {/* Center - Links */}
                <section id="pages" className="desktop-menu">
                    <nav id="nav-center">
                        <Link id="home" to="/" className="nav-link">Home</Link>
                        <Link id="inviataion" to="/invite" className="nav-link">Invitation</Link>
                        <Link id="About" to="/About" className="nav-link">About Us</Link>
                        <Link id="Disclaimer" to="/Disclaimer" className="nav-link">Disclaimer</Link>
                        <Link id="Privacypolicy" to="/Privacypolicy" className="nav-link">Privacy Policy</Link>
                        <Link id="Contact" to="/Contact" className="nav-link">Contact Us</Link>
                    </nav>
                </section>

                {/* Right - Buttons */}
                <div id="nav-right" className="desktop-menu">
                    <Link to="https://www.fantasygems17.com/#/register?invitationCode=67717105959">
                        <button id="register">Register</button>
                    </Link>
                    <Link to="https://www.pakgames.bet/#/register?invitationCode=26666218661">
                        <button id="login">Login</button>
                    </Link>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <Link to="/" onClick={toggleMobileMenu}>Home</Link>
                        <Link to="/invitation" onClick={toggleMobileMenu}>Invitation</Link>
                        <Link to="/About" onClick={toggleMobileMenu}>About Us</Link>
                        <Link to="/Disclaimer" onClick={toggleMobileMenu}>Disclaimer</Link>
                        <Link to="/Privacypolicy" onClick={toggleMobileMenu}>Privacy Policy</Link>
                        <Link to="/Contact" onClick={toggleMobileMenu}>Contact Us</Link>
                    </div>
                )}

            </section>
        </header>
    );
}

export default Header;
