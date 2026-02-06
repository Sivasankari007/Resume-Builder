import React from 'react';
import { useResume } from '../../context/ResumeContext';
import '../../styles/Form.css';

export default function PersonalDetails() {
    const { resumeData, updatePersonal } = useResume();
    const { personal } = resumeData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updatePersonal(name, value);
    };

    return (
        <div className="form-section">
            <h3>Personal Details</h3>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={personal.firstName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="John"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={personal.lastName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Job Title</label>
                <input
                    type="text"
                    name="title"
                    value={personal.title}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Software Engineer"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={personal.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={personal.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+1 234 567 890"
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={personal.address}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="New York, USA"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Website</label>
                    <input
                        type="url"
                        name="website"
                        value={personal.website}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="www.johndoe.com"
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Professional Summary</label>
                <textarea
                    name="summary"
                    value={personal.summary}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Write a short summary about your professional background..."
                />
            </div>
        </div>
    );
}
