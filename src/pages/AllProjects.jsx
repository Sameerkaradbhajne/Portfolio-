import React from 'react';
import Projects from '../components/Projects';

const AllProjects = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <div className="container">
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    marginBottom: '10px',
                    textAlign: 'left' // Modern clean left align
                }}>Selected Works.</h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '60px',
                    maxWidth: '600px'
                }}>
                    A collection of projects showcasing my journey in building intelligent, agentic systems.
                </p>
            </div>

            <Projects />

            <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '20px 40px',
                    border: '1px dashed var(--text-secondary)',
                    borderRadius: '8px',
                    color: 'var(--text-secondary)'
                }}>
                    More experiments cooking in the lab... 🧪
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
