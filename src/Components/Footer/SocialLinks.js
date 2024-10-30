import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <div className="component-content">
            <h4 className="social-heading">Follow Us</h4>
            <div className="social-links">
                <div className="social-link">
                    <a
                        href="https://www.youtube.com/user/PanadolArabia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube - open in a new tab"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                            alt="YouTube"
                            title="YouTube"
                            className="social-icon"
                        />
                    </a>
                </div>
                <div className="social-link">
                    <a
                        href="https://www.facebook.com/Panadol145/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook - open in a new tab"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                            alt="Facebook"
                            title="Facebook"
                            className="social-icon"
                        />
                    </a>
                </div>
                <div className="social-link">
                    <a
                        href="https://www.instagram.com/panadolke/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram - open in a new tab"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                            alt="Instagram"
                            title="Instagram"
                            className="social-icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;
