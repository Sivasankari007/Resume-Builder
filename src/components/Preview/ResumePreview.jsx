import React, { forwardRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import ModernTemplate from './Templates/ModernTemplate';
import MinimalistTemplate from './Templates/MinimalistTemplate';
import CreativeTemplate from './Templates/CreativeTemplate';

const ResumePreview = forwardRef((props, ref) => {
    const { selectedTemplate } = useResume();

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 'minimalist':
                return <MinimalistTemplate />;
            case 'creative':
                return <CreativeTemplate />;
            case 'modern':
            default:
                return <ModernTemplate />;
        }
    };

    return (
        <div className="resume-preview-container" ref={ref}>
            {renderTemplate()}
        </div>
    );
});

export default ResumePreview;
