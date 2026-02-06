import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './components/Header';
import Editor from './components/Editor/Editor';
import ResumePreview from './components/Preview/ResumePreview';
import './styles/App.css';

function App() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Resume',
  });

  return (
    <div className="app-main">
      <Header onPrint={handlePrint} />

      <main className="container">
        <div className="editor-layout">
          <section className="editor-section" style={{ overflowY: 'auto', paddingRight: '1rem', maxHeight: '100%' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Editor</h2>
              <Editor />
            </div>
          </section>

          <section className="preview-section" style={{ display: 'flex', justifyContent: 'center', background: '#525659', padding: '2rem', borderRadius: '8px', overflowY: 'auto' }}>
            <ResumePreview ref={componentRef} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
