import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import '../styles/minimal.css';

const DirectGrapesJSTest = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      console.log('Creating direct GrapesJS editor...');
      
      const editor = grapesjs.init({
        container: editorRef.current,
        height: '100vh',
        storageManager: false,
        plugins: [],
        canvas: {
          styles: [
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
          ]
        },
        blockManager: {
          appendTo: '.blocks-container',
          open: true
        },
        panels: {
          defaults: [
            {
              id: 'basic-actions',
              el: '.panel__basic-actions',
              buttons: []
            }
          ]
        }
      });

      console.log('Direct editor created:', editor);

      // Add basic blocks
      editor.BlockManager.add('text', {
        label: 'Text',
        content: '<div>Text Block</div>',
        category: 'Basic'
      });

      editor.BlockManager.add('image', {
        label: 'Image', 
        content: '<img src="https://via.placeholder.com/300x200" />',
        category: 'Basic'
      });

      editor.BlockManager.add('button', {
        label: 'Button',
        content: '<button>Click me</button>',
        category: 'Basic'
      });

      // Add comprehensive debugging
      editor.on('load', () => {
        console.log('Direct editor loaded');
        console.log('Block manager:', editor.BlockManager);
        console.log('Available blocks:', editor.BlockManager.getAll());
        
        const blocksContainer = document.querySelector('.blocks-container');
        console.log('Blocks container:', blocksContainer);
        
        // Force render
        editor.BlockManager.render();
        
        // Check for blocks in DOM
        setTimeout(() => {
          const blocks = document.querySelectorAll('.gjs-block');
          console.log('Found blocks in DOM:', blocks.length);
          
          if (blocks.length > 0) {
            console.log('Blocks are rendered!');
            blocks.forEach((block, index) => {
              console.log(`Block ${index}:`, block);
              console.log(`Block ${index} classes:`, block.className);
              console.log(`Block ${index} draggable:`, block.draggable);
            });
          } else {
            console.log('No blocks found in DOM - this is the problem!');
            console.log('Blocks container HTML:', blocksContainer?.innerHTML);
          }
        }, 2000);
      });

      editor.on('block:drag:start', (block) => {
        console.log('DRAG STARTED!', block.get('label'));
      });

      editor.on('block:drag:stop', (block) => {
        console.log('DRAG STOPPED!', block.get('label'));
      });

      editor.on('component:add', (component) => {
        console.log('COMPONENT ADDED!', component.get('type'));
      });

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
          <h2>Direct GrapesJS Test</h2>
          <p>Check console for debugging info</p>
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

export default DirectGrapesJSTest;
