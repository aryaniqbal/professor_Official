import React from 'react';
import "../HFCSS/footer.css";
import Logo from '../assets/PG.png'; import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Section 1: Logo and About */}
                <div className="footer-section">
                    <img src={Logo} alt="Logo" className="footer-logo" />
                    <h3 id='changepostions'>About Us</h3>
                    <p id='para1'>
                        We are dedicated to providing the best content and tools for your needs.
                        Explore more and stay connected!
                    </p>
                </div>

                {/* Section 2: Quick Links */}
                <div className="footer-section" id='changetop'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/invitation">Invitation</a></li>
                        <li><a href="About.jsx">About Us</a></li>
                        <li><a href="/disclaimer">Disclaimer</a></li>
                        <li><a href="/privacypolicy">Privacy Policy</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Section 3: Subscribe & Socials */}
                <div className="footer-section">
                    <h3 id='sub'> PROFESSOR OFFICIAL </h3>
                    <input type="email" placeholder="Enter your email" className="footer-input" required />
                    <button className="footer-btn">Subscribe</button>

                    <div className="social-icons">
                        <a href="https://www.facebook.com/share/14GcMnCH2gp/"><i className="fab fa-facebook"></i></a>
                        <a href="https://chat.whatsapp.com/HYFqs9nFLaJ3ce5INTyueX?mode=ac_t"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/professor.officials?igsh=MXI0ZnppOXAwaGtoeg=="><i className="fab fa-instagram"></i></a>
                        <a href="https://t.me/Professor5577"><i class="fa-brands fa-telegram"></i></a>
                    </div>

                </div>

            </div>

            {/* Bottom Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Your Professorofficial. All rights reserved.</p>
            </div>
        </footer>

    );
}

export default Footer;
