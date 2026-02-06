import React from 'react';
import { useResume } from '../../../context/ResumeContext';
import '../../../styles/Resume.css';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function MinimalistTemplate() {
    const { resumeData } = useResume();
    const { personal, experience, education, skills } = resumeData;

    return (
        <div className="resume-page" style={{ padding: '3rem', color: 'hsl(var(--text-main))' }}>
            {/* Header - Centered */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '300', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                    {personal.firstName} <span style={{ fontWeight: '700' }}>{personal.lastName}</span>
                </h1>
                <div style={{ fontSize: '1.25rem', color: 'hsl(var(--primary))', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {personal.title}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>
                    {personal.phone && <span>{personal.phone}</span>}
                    {personal.email && <span>{personal.email}</span>}
                    {personal.address && <span>{personal.address}</span>}
                    {personal.website && <span>{personal.website}</span>}
                </div>
            </div>

            {/* Summary */}
            {personal.summary && (
                <div style={{ marginBottom: '2.5rem' }}>
                    <p style={{ lineHeight: '1.6', fontSize: '1rem', textAlign: 'center', maxWidth: '80%', margin: '0 auto' }}>
                        {personal.summary}
                    </p>
                </div>
            )}

            {/* Skills - Simple Grid */}
            {skills.length > 0 && (
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                        {skills.map(skill => (
                            <span key={skill.id} style={{
                                borderBottom: '2px solid hsl(var(--secondary))',
                                padding: '0 0.25rem',
                                fontSize: '0.95rem'
                            }}>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        borderBottom: '1px solid hsl(var(--border))',
                        paddingBottom: '0.5rem',
                        marginBottom: '1.5rem',
                        color: 'hsl(var(--text-muted))'
                    }}>
                        Experience
                    </h3>
                    {experience.map(exp => (
                        <div key={exp.id} style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{exp.title}</div>
                                <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>{exp.startDate} - {exp.endDate}</div>
                            </div>
                            <div style={{ color: 'hsl(var(--primary))', fontWeight: '500', marginBottom: '0.75rem' }}>{exp.company}</div>
                            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{exp.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Education */}
            {education.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        borderBottom: '1px solid hsl(var(--border))',
                        paddingBottom: '0.5rem',
                        marginBottom: '1.5rem',
                        color: 'hsl(var(--text-muted))'
                    }}>
                        Education
                    </h3>
                    {education.map(edu => (
                        <div key={edu.id} style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{edu.school}</div>
                                <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>{edu.startDate} - {edu.endDate}</div>
                            </div>
                            <div style={{ fontSize: '1rem' }}>{edu.degree}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
