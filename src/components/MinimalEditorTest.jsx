import React, { useEffect, useRef } from 'react';
import { createMinimalEditor } from '../utils/minimalEditor.js';
import '../styles/minimal.css';

const MinimalEditorTest = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      console.log('Creating minimal editor...');
      const editor = createMinimalEditor(editorRef.current);
      
      return () => {
        if (editor) {
          editor.destroy();
        }
      };
    }
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="panel__top" style={{ padding: '10px', background: '#f0f0f0' }}>
        <div className="panel__basic-actions">
          <h2>Minimal Editor Test - Drag & Drop</h2>
          <p>Try dragging the blocks from the left panel to the canvas area</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '300px', background: '#f9f9f9', padding: '10px', borderRight: '1px solid #ddd' }}>
          <h3>Blocks</h3>
          <div className="blocks-container"></div>
        </div>
        
        <div style={{ flex: 1, background: '#fff' }}>
          <div ref={editorRef} style={{ height: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MinimalEditorTest;
