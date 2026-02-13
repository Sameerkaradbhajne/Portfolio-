import React from 'react';
import profileImg from '../assets/profile.png';

const About = () => {
    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}><span className="text-accent">01.</span> About Me</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                    <div>
                        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            I’m a <strong>CSE student</strong> passionate about building low-latency AI systems at the edge.
                            My work bridges the gap between <span className="text-accent">agentic architectures</span>, vision models, and real-world security challenges.
                        </p>
                        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Instead of just writing code, I focus on <strong>solving problems</strong>. Whether it's optimizing a drone's neural network or
                            orchestrating multi-agent swarms, I am obsessed with systems that <em>think</em> and <em>act</em> autonomously.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Currently leveraging <strong>NVIDIA NIM, Cerebras, and Zynd SDK</strong> to build the next generation of intelligent tools.
                        </p>
                    </div>

                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '300px',
                            height: '300px',
                            position: 'relative'
                        }}>
                            <img
                                src={profileImg}
                                alt="Sameer Karadbhajne"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
