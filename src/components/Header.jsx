import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function Header({ onPrint }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <div className="icon-wrapper">
            <FileText size={24} color="white" />
          </div>
          <h1>Resume<span className="text-primary">Builder</span></h1>
        </div>
        <div className="actions">
          <button className="btn btn-primary" onClick={onPrint}>
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}
