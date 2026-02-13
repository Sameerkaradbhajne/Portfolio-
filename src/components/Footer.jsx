import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ padding: '20px 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                    <a href="https://www.linkedin.com/in/sameer-karadbhajne" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}><FaLinkedin /></a>
                    {/* Add other social links if available. Using placeholders for design. */}
                    {/* <a href="#" style={{ fontSize: '1.5rem' }}><FaGithub /></a> */}
                </div>
                <p>Designed & Built by Sameer Karadbhajne</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontWeight: '500' }}>
                    Building intelligent systems, one project at a time.
                </p>
                <p>© {currentYear} All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
