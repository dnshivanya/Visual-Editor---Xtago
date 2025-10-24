import React, { useEffect, useRef, useState } from 'react';
import { setupEditor } from '../../utils/editorSetup.js';
import { useLoadingSimulation, useRealTimeInputListeners } from '../../hooks/useEditor.js';
import { LoadingScreen, EditorHeader, EditorSidebar, DeviceButtons } from '../ui/EditorComponents.jsx';

const GrapesEditor = () => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const { isLoading, loadingProgress, completeLoading } = useLoadingSimulation();

  useEffect(() => {
    let isMounted = true;
    let editorInstance = null;
    
    const initializeEditor = async () => {
      if (editorRef.current && !editor && isMounted) {
        console.log('Initializing editor...');
        editorInstance = setupEditor(editorRef.current, completeLoading);
        console.log('Editor instance created:', editorInstance);
        setEditor(editorInstance);
        
        // Fallback: complete loading after 3 seconds if editor doesn't trigger it
        setTimeout(() => {
          if (isMounted) {
            console.log('Fallback: completing loading');
            completeLoading();
          }
        }, 3000);
      }
    };
    
    initializeEditor();
    
    return () => {
      isMounted = false;
      if (editorInstance) {
        console.log('Destroying editor...');
        editorInstance.destroy();
        setEditor(null);
      }
    };
  }, []); // Empty dependency array to run only once

  // Call the hook at component level
  useRealTimeInputListeners(editor);

  return (
    <>
      <LoadingScreen isLoading={isLoading} loadingProgress={loadingProgress} />
      
      <div className="gjs-editor" role="main" aria-label="Visual Website Editor" style={{ display: isLoading ? 'none' : 'flex' }}>
        <EditorHeader />
        <DeviceButtons editor={editor} />
        <div className="editor-row">
          <div className="editor-canvas" role="main" aria-label="Canvas Area">
            <div ref={editorRef} style={{ width: '100%', height: '100%' }}></div>
          </div>
          <EditorSidebar />
        </div>
      </div>
    </>
  );
};

export default GrapesEditor;