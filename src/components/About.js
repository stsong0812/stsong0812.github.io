import React from 'react';
import './About.css';
import icon from '../images/icon.png'; // Import the image

const About = () => {
    return (
        <div className="container">
            {/* Main section */}
            <section id="about">
                <p>About Me</p>

                <div className="description">
                    <img src={icon} alt="Icon PNGs by Vecteezy" className="icon-img" />
                    <p>
                        Hello! My name is Steven and I am a student at California State University Fullerton (CSUF) pursuing a bachelor's in
                        Computer Science with a concentration on Cybersecurity. I am actively seeking entry-level job opportunities and
                        internships focused on blue team cybersecurity roles.
                        <br /><br />
                        My relevant experience includes threat intelligence, network security, web security, endpoint security, incident response,
                        cryptography, governance, risk assessment, and identity and access management (IAM). Additionally, I have a strong programming
                        background with hands-on experience in software development and collaborative team environments. I have developed and deployed
                        projects such as a personal portfolio using React, a centralized password manager, and an online quiz application.
                        <br /><br />
                        My cybersecurity experience is built on earning the CompTIA Security+ certification, participating in red and blue team competitions,
                        and completing coursework at CSUF. II also have hands-on experience with tools such as VMware, Splunk, BurpSuite, Wireshark, Snort,
                        and Metasploit. Additionally, I have knowledge of frameworks including NIST, CIS Controls, MITRE ATT&CK, and ISO/IEC, with more to
                        come as I continue to learn.
                    </p>
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

export default About;