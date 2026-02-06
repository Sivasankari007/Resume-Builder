import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Layout } from 'lucide-react';

export default function TemplateSelector() {
    const { selectedTemplate, setTemplate } = useResume();

    const templates = [
        { id: 'modern', name: 'Modern', color: '#6c5ce7' },
        { id: 'minimalist', name: 'Minimalist', color: '#2d3436' },
        { id: 'creative', name: 'Creative', color: '#a29bfe' },
    ];

    return (
        <div className="form-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Layout size={18} color="hsl(var(--primary))" />
                <h3 style={{ margin: 0 }}>Choose Template</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {templates.map(template => (
                    <button
                        key={template.id}
                        onClick={() => setTemplate(template.id)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            border: selectedTemplate === template.id
                                ? '2px solid hsl(var(--primary))'
                                : '1px solid hsl(var(--border))',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: selectedTemplate === template.id
                                ? 'hsl(var(--primary) / 0.1)'
                                : 'hsl(var(--surface))',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: '40px',
                            backgroundColor: template.color,
                            borderRadius: '4px',
                            opacity: 0.8
                        }}></div>
                        <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{template.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
