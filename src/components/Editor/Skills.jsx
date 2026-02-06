import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { X, Plus } from 'lucide-react';

export default function Skills() {
    const { resumeData, addSkill, removeSkill } = useResume();
    const [currentSkill, setCurrentSkill] = useState('');

    const handleAdd = () => {
        if (currentSkill.trim()) {
            addSkill(currentSkill.trim());
            setCurrentSkill('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <div className="form-section">
            <h3>Skills</h3>

            <div className="form-row" style={{ alignItems: 'flex-end' }}>
                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Add a Skill</label>
                    <input
                        type="text"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="form-input"
                        placeholder="e.g. JavaScript"
                    />
                </div>
                <button onClick={handleAdd} className="btn-primary" style={{ marginBottom: '2px' }}>
                    <Plus size={18} />
                </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {resumeData.skills.map(skill => (
                    <div key={skill.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'hsl(var(--surface))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem'
                    }}>
                        <span>{skill.name}</span>
                        <button
                            onClick={() => removeSkill(skill.id)}
                            style={{ color: 'hsl(var(--text-muted))', display: 'flex' }}
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
