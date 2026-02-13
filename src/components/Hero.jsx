import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '5%',
            paddingRight: '5%',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <div style={{ paddingLeft: '5%', paddingRight: '5%', maxWidth: '1200px' }}>

                {/* Role Clarity Line */}
                <p style={{
                    fontFamily: 'monospace',
                    color: 'var(--accent-color)',
                    marginBottom: '10px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    opacity: 0,
                    animation: 'fadeIn 0.8s ease forwards'
                }}>
                    AI • Cloud • Agentic Systems | CSE Student
                </p>

                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    marginBottom: '10px',
                    opacity: 0,
                    animation: 'fadeInUp 0.8s ease forwards 0.2s'
                }}>
                    Sameer Karadbhajne.
                </h1>

                <h2 style={{
                    fontSize: '2.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px',
                    height: '60px',
                    opacity: 0,
                    animation: 'fadeInUp 0.8s ease forwards 0.4s'
                }}>
                    <Typewriter
                        options={{
                            strings: ['I build intelligent systems.', 'I create agentic flows.', 'I solve complex problems.'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '40px',
                    maxWidth: '500px',
                    lineHeight: '1.6',
                    opacity: 0,
                    animation: 'fadeInUp 0.8s ease forwards 0.6s'
                }}>
                    Tech Enthusiast & CSE Student specializing in AI, Machine Learning, and Cloud Computing.
                    Building the future with agentic workflows and decentralized systems.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '20px',
                    opacity: 0,
                    animation: 'fadeInUp 0.8s ease forwards 0.8s'
                }}>
                    <a href="#projects" className="btn-primary">
                        Check my work
                    </a>
                    <a href="https://www.linkedin.com/in/sameer-karadbhajne"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline">
                        LinkedIn
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
