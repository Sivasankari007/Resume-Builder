import React from 'react';
import { useResume } from '../../../context/ResumeContext';
import '../../../styles/Resume.css';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function CreativeTemplate() {
    const { resumeData } = useResume();
    const { personal, experience, education, skills } = resumeData;

    return (
        <div className="resume-page" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Bold Header */}
            <div style={{
                backgroundColor: 'hsl(var(--primary))',
                color: 'white',
                padding: '3rem 2rem',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                marginBottom: '2rem'
            }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1', marginBottom: '0.5rem', color: 'white' }}>
                    {personal.firstName}<br />{personal.lastName}
                </h1>
                <div style={{
                    display: 'inline-block',
                    backgroundColor: 'white',
                    color: 'hsl(var(--primary))',
                    padding: '0.5rem 1rem',
                    fontWeight: '700',
                    fontSize: '1.2rem',
                    transform: 'rotate(-2deg)',
                    boxShadow: '4px 4px 0 rgba(0,0,0,0.1)'
                }}>
                    {personal.title}
                </div>
            </div>

            <div style={{ padding: '0 2rem 2rem', flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                {/* Main Column */}
                <div>
                    {personal.summary && (
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', borderLeft: '5px solid hsl(var(--secondary))', paddingLeft: '1rem', marginBottom: '1rem', color: 'hsl(var(--text-main))' }}>
                                Start Here
                            </h3>
                            <p style={{ lineHeight: '1.6', fontSize: '1rem', color: 'hsl(var(--text-main))' }}>
                                {personal.summary}
                            </p>
                        </div>
                    )}

                    {experience.length > 0 && (
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', borderLeft: '5px solid hsl(var(--secondary))', paddingLeft: '1rem', marginBottom: '1.5rem', color: 'hsl(var(--text-main))' }}>
                                Experience
                            </h3>
                            {experience.map(exp => (
                                <div key={exp.id} style={{ marginBottom: '2rem', position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid hsl(var(--border))' }}>
                                    <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'hsl(var(--secondary))' }}></div>
                                    <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{exp.title}</div>
                                    <div style={{ color: 'hsl(var(--primary))', fontWeight: '600', marginBottom: '0.25rem' }}>{exp.company}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))', marginBottom: '0.5rem' }}>{exp.startDate} - {exp.endDate}</div>
                                    <p style={{ fontSize: '0.95rem' }}>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar Column */}
                <div>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', color: 'hsl(var(--text-main))', textTransform: 'uppercase' }}>
                            Contact
                        </h3>
                        <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {personal.phone && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Phone size={16} strokeWidth={2.5} color="hsl(var(--primary))" /> <span>{personal.phone}</span>
                                </div>
                            )}
                            {personal.email && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Mail size={16} strokeWidth={2.5} color="hsl(var(--primary))" /> <span style={{ wordBreak: 'break-all' }}>{personal.email}</span>
                                </div>
                            )}
                            {personal.address && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MapPin size={16} strokeWidth={2.5} color="hsl(var(--primary))" /> <span>{personal.address}</span>
                                </div>
                            )}
                            {personal.website && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Globe size={16} strokeWidth={2.5} color="hsl(var(--primary))" /> <span>{personal.website}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {skills.length > 0 && (
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', color: 'hsl(var(--text-main))', textTransform: 'uppercase' }}>
                                Skills
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {skills.map(skill => (
                                    <span key={skill.id} style={{
                                        backgroundColor: 'hsl(var(--primary))',
                                        color: 'white',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {education.length > 0 && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', color: 'hsl(var(--text-main))', textTransform: 'uppercase' }}>
                                Education
                            </h3>
                            {education.map(edu => (
                                <div key={edu.id} style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ fontWeight: '700', fontSize: '1rem' }}>{edu.degree}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'hsl(var(--text-main))' }}>{edu.school}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}>{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
