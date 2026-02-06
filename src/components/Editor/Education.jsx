import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

export default function Education() {
    const { resumeData, addEducation, updateEducation, removeEducation } = useResume();

    return (
        <div className="form-section">
            <h3>Education</h3>

            {resumeData.education.map((edu) => (
                <div key={edu.id} className="form-group" style={{
                    border: '1px solid hsl(var(--border))',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    position: 'relative'
                }}>
                    <button
                        onClick={() => removeEducation(edu.id)}
                        style={{ position: 'absolute', top: '10px', right: '10px', color: 'red' }}
                        title="Remove"
                    >
                        <Trash2 size={16} />
                    </button>

                    <div className="form-group">
                        <label className="form-label">School / University</label>
                        <input
                            type="text"
                            value={edu.school}
                            onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Degree</label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                className="form-input"
                            />
                        </div>
                        <div className="form-row" style={{ gap: '0.5rem' }}>
                            <div className="form-group">
                                <label className="form-label">Start</label>
                                <input
                                    type="text"
                                    value={edu.startDate}
                                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                    className="form-input"
                                    placeholder="YYYY"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">End</label>
                                <input
                                    type="text"
                                    value={edu.endDate}
                                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                    className="form-input"
                                    placeholder="YYYY"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={addEducation} className="btn-primary" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
                <Plus size={16} /> Add Education
            </button>
        </div>
    );
}
