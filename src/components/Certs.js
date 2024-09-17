import React from 'react';
import './Certs.css';
import certImage from '../images/sec_cert.jpg';
import certImage1 from '../images/google_cert.jpg';

const Certs = () => {
    return (
        <div className="container">
            {/* Main section */}
            <section id="certs">
                <div className="description">
                    <p>
                    <p>Certifications</p>
                        Below are some of the certifications I have earned.
                    </p>
                    <div className="cert-images">
                        <img src={certImage} alt="Certification logo" className="cert-logo" />
                        <img src={certImage1} alt="Certification logo" className="cert-logo" />
                    </div>
                </div>
            </section>

            {/* Footer section with social media links and copyright information */}
            <footer>
                <div className="social-icons">
                    {/*GitHub profile */}
                    <a href="https://github.com/stsong0812" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    {/*LinkedIn profile */}
                    <a href="https://www.linkedin.com/in/stsong0812/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/*Twitter profile */}
                    <a href="https://x.com/scanttk" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                {/* Copyright information */}
                <p>Copyright &copy; 2024 Steven Song</p>
            </footer>
        </div>
    );
};

export default Certs;