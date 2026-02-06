import React from 'react';
import { useResume } from '../../../context/ResumeContext';
import '../../../styles/Resume.css';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function ModernTemplate() {
    const { resumeData } = useResume();
    const { personal, experience, education, skills } = resumeData;

    return (
        <div className="resume-page template-modern">
            <div className="template-sidebar">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {/* Avatar Placeholder */}
                    <div style={{
                        width: '120px',
                        height: '120px',
                        background: '#34495e',
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.2)',
                        fontSize: '3rem'
                    }}>
                        {personal.firstName?.[0]}{personal.lastName?.[0]}
                    </div>
                </div>

                <div className="sidebar-section">
                    <h4 className="sidebar-section-title">Contact</h4>
                    {personal.phone && (
                        <div className="contact-item">
                            <Phone size={14} /> <span>{personal.phone}</span>
                        </div>
                    )}
                    {personal.email && (
                        <div className="contact-item">
                            <Mail size={14} /> <span style={{ fontSize: '0.85rem' }}>{personal.email}</span>
                        </div>
                    )}
                    {personal.address && (
                        <div className="contact-item">
                            <MapPin size={14} /> <span>{personal.address}</span>
                        </div>
                    )}
                    {personal.website && (
                        <div className="contact-item">
                            <Globe size={14} /> <span>{personal.website}</span>
                        </div>
                    )}
                </div>

                <div className="sidebar-section">
                    <h4 className="sidebar-section-title">Skills</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {skills.map(skill => (
                            <span key={skill.id} className="skill-tag">{skill.name}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="template-main">
                <div className="header-section">
                    <h1 className="resume-name">{personal.firstName} {personal.lastName}</h1>
                    <div className="resume-title">{personal.title}</div>
                    <p className="item-description">{personal.summary}</p>
                </div>

                {experience.length > 0 && (
                    <div className="main-section">
                        <h3 className="section-title">Experience</h3>
                        {experience.map(exp => (
                            <div key={exp.id} className="exp-item">
                                <div className="item-header">
                                    <div className="item-title">{exp.title}</div>
                                    <div className="item-date">{exp.startDate} - {exp.endDate}</div>
                                </div>
                                <div className="item-subtitle">{exp.company}</div>
                                <p className="item-description" style={{ marginTop: '0.5rem' }}>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {education.length > 0 && (
                    <div className="main-section">
                        <h3 className="section-title">Education</h3>
                        {education.map(edu => (
                            <div key={edu.id} className="edu-item">
                                <div className="item-header">
                                    <div className="item-title">{edu.school}</div>
                                    <div className="item-date">{edu.startDate} - {edu.endDate}</div>
                                </div>
                                <div className="item-subtitle">{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
