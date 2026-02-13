import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '100px 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.85)', // High opacity for readability
                    backdropFilter: 'blur(12px)',
                    padding: '50px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)'
                }}>
                    <p className="text-accent" style={{ marginBottom: '20px', fontWeight: 'bold' }}>04. What's Next?</p>
                    <h2 style={{ fontSize: '3rem', marginBottom: '30px', color: 'var(--text-color)' }}>Get In Touch</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        I am always open to discussing new projects, creative ideas, or opportunities
                        to be part of your visions. Whether you have a question or just want to say hi,
                        feel free to connect!
                    </p>
                    <a href="https://www.linkedin.com/in/sameer-karadbhajne"
                        className="btn"
                        style={{ padding: '15px 30px', fontSize: '1.2rem' }}
                        target="_blank"
                        rel="noopener noreferrer">
                        Say Hello on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
