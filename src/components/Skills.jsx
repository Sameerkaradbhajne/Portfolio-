import React from 'react';
import { FaBrain, FaCloud, FaCode, FaServer, FaPython, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiNvidia, SiMongodb } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "AI & Machine Learning",
            icon: <FaBrain />,
            skills: [
                { name: "TensorFlow", icon: <SiTensorflow /> },
                { name: "PyTorch", icon: <SiPytorch /> },
                { name: "NVIDIA NIM", icon: <SiNvidia /> },
                { name: "Computer Vision", icon: <FaBrain /> }, // Generic brain for concept
            ]
        },
        {
            title: "Cloud & Backend",
            icon: <FaCloud />,
            skills: [
                { name: "AWS", icon: <FaAws /> },
                { name: "Docker", icon: <FaDocker /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "FastAPI", icon: <FaServer /> },
            ]
        },
        {
            title: "Languages & Tools",
            icon: <FaCode />,
            skills: [
                { name: "Python", icon: <FaPython /> },
                { name: "JavaScript", icon: <FaCode /> }, // Using generic code for JS if FaJs not preferred or available easily
                { name: "React", icon: <FaReact /> },
                { name: "Zynd SDK", icon: <FaCode /> },
            ]
        }
    ];

    return (
        <section id="skills" style={{ padding: '100px 0', background: 'transparent' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center' }}>
                    <span className="text-accent">02.</span> Technical Arsenal
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {skillCategories.map((category, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(10px)',
                            padding: '30px',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.5)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                <span style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>{category.icon}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{category.title}</h3>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background: 'rgba(255,255,255,0.5)',
                                        padding: '10px 15px',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <span style={{ color: 'var(--accent-color)' }}>{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
