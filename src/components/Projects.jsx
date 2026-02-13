import React from 'react';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    const projects = [
        {
            title: "EdgeGuard",
            event: "IoT Security Agent",
            description: "Agentic AI-based home IoT security system that detects, deceives, and autonomously responds to threats at the edge.",
            tags: ["Edge AI", "NVIDIA Vision", "Zynd SDK", "Security"],
            color: "#3B82F6" // Neon Blue
        },
        {
            title: "Neural Nexus",
            event: "AI Research Platform",
            description: "A collaborative AI research and experimentation platform focused on intelligent systems and applied machine learning.",
            tags: ["Machine Learning", "Python", "AI Pipelines", "Research"],
            color: "#10B981" // Emerald Green
        },
        {
            title: "Emergency Detection",
            event: "Zynd Aickathon 2025",
            description: "Low-latency multi-agent system that detects road accidents using vision models and instantly reports incidents.",
            tags: ["Computer Vision", "Multi-Agent System", "Real-time"],
            color: "#ff4d4d" // Red
        },
        {
            title: "DevOps Excellence",
            event: "IIT Bombay × GitLab (Top 10)",
            description: "National Semifinalist. Validated ability to utilize Git/GitLab workflows and deliver solutions under tight deadlines.",
            tags: ["DevOps", "GitLab", "Hackathon", "Teamwork"],
            color: "#FC6D26" // GitLab Orange
        }
    ];

    return (
        <section id="projects" style={{ padding: '40px 0' }}>
            <div className="container">

                {/* Animated Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px',
                    perspective: '1000px'
                }}>
                    {projects.map((project, index) => (
                        <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
                            <div className="project-card" style={{
                                background: 'rgba(255, 255, 255, 0.4)', // Glass effect
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                borderRadius: '20px',
                                padding: '40px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                                height: '100%', // Ensure full height in grid
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                animation: `fadeInUp 0.6s ease forwards ${index * 0.2}s`,
                                opacity: 0,
                                transform: 'translateY(20px)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.1)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1.0)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.05)';
                                }}
                            >
                                {/* Decorative Gradient Blob */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '-50px',
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    background: project.color,
                                    filter: 'blur(60px)',
                                    opacity: 0.2
                                }}></div>

                                <span style={{
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '10px',
                                    display: 'block'
                                }}>{project.event}</span>

                                <h3 style={{
                                    fontSize: '2rem',
                                    marginBottom: '20px',
                                    fontWeight: '800',
                                    lineHeight: '1.1'
                                }}>{project.title}</h3>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '30px',
                                    lineHeight: '1.6',
                                    fontSize: '1.05rem'
                                }}>{project.description}</p>

                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            background: 'rgba(0,0,0,0.05)',
                                            padding: '6px 14px',
                                            borderRadius: '50px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            color: 'var(--text-color)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>

            {/* Add global keyframes for animations if not already present */}
            <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default Projects;
