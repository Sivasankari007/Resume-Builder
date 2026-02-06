import React from 'react';
import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import TemplateSelector from './TemplateSelector';

export default function Editor() {
    return (
        <div className="editor-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ paddingBottom: '2rem', borderBottom: '1px solid hsl(var(--border))' }}>
                <TemplateSelector />
            </div>
            <PersonalDetails />
            <Experience />
            <Education />
            <Skills />
        </div>
    );
}
