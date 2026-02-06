import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

export default function Experience() {
    const { resumeData, addExperience, updateExperience, removeExperience } = useResume();

    return (
        <div className="form-section">
            <h3>Experience</h3>

            {resumeData.experience.map((exp) => (
                <div key={exp.id} className="form-group" style={{
                    border: '1px solid hsl(var(--border))',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    position: 'relative'
                }}>
                    <button
                        onClick={() => removeExperience(exp.id)}
                        style={{ position: 'absolute', top: '10px', right: '10px', color: 'red' }}
                        title="Remove"
                    >
                        <Trash2 size={16} />
                    </button>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Job Title</label>
                            <input
                                type="text"
                                value={exp.title}
                                onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company</label>
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Start Date</label>
                            <input
                                type="text"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                className="form-input"
                                placeholder="MM/YYYY"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">End Date</label>
                            <input
                                type="text"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                className="form-input"
                                placeholder="Present or MM/YYYY"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            className="form-textarea"
                            placeholder="Describe your responsibilities and achievements..."
                        />
                    </div>
                </div>
            ))}

            <button onClick={addExperience} className="btn-primary" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
                <Plus size={16} /> Add Experience
            </button>
        </div>
    );
}
