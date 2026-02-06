import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
};

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState({
        personal: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            title: '',
            summary: '',
            address: '',
            website: '',
        },
        experience: [], // { id, title, company, startDate, endDate, description }
        education: [],  // { id, school, degree, startDate, endDate, description }
        skills: [],     // { id, name, level }
        projects: []    // { id, name, description, link }
    });

    const [selectedTemplate, setTemplate] = useState('modern');

    const updatePersonal = (field, value) => {
        setResumeData(prev => ({
            ...prev,
            personal: { ...prev.personal, [field]: value }
        }));
    };

    const addExperience = () => {
        setResumeData(prev => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    id: Date.now(),
                    title: '',
                    company: '',
                    startDate: '',
                    endDate: '',
                    current: false,
                    description: ''
                }
            ]
        }));
    };

    const updateExperience = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.map(exp =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const removeExperience = (id) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.filter(exp => exp.id !== id)
        }));
    };

    // Similar functions can be added for Education, Skills, etc.
    // For brevity, I'll add generic helpers or expand as needed.

    const addEducation = () => {
        setResumeData(prev => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    id: Date.now(),
                    school: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                }
            ]
        }));
    };

    const updateEducation = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.map(edu =>
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        }));
    };

    const removeEducation = (id) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.filter(edu => edu.id !== id)
        }));
    };

    const addSkill = (skillName) => {
        if (!skillName) return;
        setResumeData(prev => ({
            ...prev,
            skills: [...prev.skills, { id: Date.now(), name: skillName }]
        }));
    };

    const removeSkill = (id) => {
        setResumeData(prev => ({
            ...prev,
            skills: prev.skills.filter(sk => sk.id !== id)
        }));
    };

    const value = {
        resumeData,
        setResumeData,
        updatePersonal,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        removeSkill,
        selectedTemplate,
        setTemplate
    };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    );
};
