import React from "react";
import footerlogo from '../../img/Screenshot_2024-10-25_165734-removebg-preview.png';
import gmaillogo from '../../img/pngwing.com-removebg-preview.png';
import SocialLinks from './SocialLinks';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={footerlogo} alt="Footer Logo" className="footer-logo" />
                        <p className="footer-description">
                            Welcome to Panadol, your trusted partner in pain relief. Our products are designed with care to ensure you feel your best. We are committed to providing safe and effective medications for all your needs.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">About Us</h3>
                        <p className="footer-description">
                            At Panadol, we understand the impact of pain on your daily life. With over 50 years of experience, our team of experts is dedicated to developing innovative solutions that improve your well-being.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="https://www.terms.haleon.com/en-ae/" className="footer-link">Terms of Use</a></li>
                            <li><a href="https://www.privacy.haleon.com/en-ae/" className="footer-link">Privacy Policy</a></li>
                            <li><a href="https://www.panadol.com/en-me/sitemap/" className="footer-link">Sitemap</a></li>
                        </ul>
                        <div className="footer-contact">
                            <img src={gmaillogo} alt="Gmail Logo" className="gmail-logo" />
                            <div>
                                <h6 className="footer-email">Contact Email:</h6>
                                <h4 className="footer-email">sp.mind@gsk.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Subscribe for Updates</h3>
                        <p className="footer-description">
                            Stay informed about our latest products, health tips, and promotions. Subscribe to our newsletter and never miss an update!
                        </p>
                        <form className="subscribe-form">
                            <input type="email" placeholder="Enter your email" required className="subscribe-input" />
                            <button type="submit" className="subscribe-button">Subscribe</button>
                        </form>
                        <SocialLinks />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2024 Panadol. This is not the official page. Designed by Eng. Anas Alnsour as a project for a SHAI Company</p>
            </div>
        </footer>
    );
};

export default Footer;
