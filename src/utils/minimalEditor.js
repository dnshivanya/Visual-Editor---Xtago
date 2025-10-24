import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

// Minimal GrapesJS setup for testing drag and drop
export const createMinimalEditor = (container) => {
  console.log('Creating editor with container:', container);
  
  const editor = grapesjs.init({
    container: container,
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

  console.log('Editor created:', editor);

  // Add basic blocks for testing
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

  console.log('Blocks added:', editor.BlockManager.getAll());

  // Add event listeners for debugging
  editor.on('load', () => {
    console.log('Minimal editor loaded');
    console.log('Available blocks:', editor.BlockManager.getAll());
    console.log('Blocks container element:', document.querySelector('.blocks-container'));
    
    // Force render blocks
    editor.BlockManager.render();
    
    // Check multiple times for blocks
    const checkBlocks = () => {
      const blocks = document.querySelectorAll('.gjs-block');
      console.log('Rendered blocks in DOM:', blocks.length);
      if (blocks.length === 0) {
        console.log('No blocks found, retrying...');
        setTimeout(checkBlocks, 500);
      } else {
        blocks.forEach((block, index) => {
          console.log(`Block ${index}:`, block);
          console.log(`Block ${index} draggable:`, block.draggable);
          console.log(`Block ${index} style:`, block.style.cssText);
        });
      }
    };
    
    setTimeout(checkBlocks, 1000);
  });

  editor.on('block:drag:start', (block) => {
    console.log('Drag started:', block.get('label'));
  });

  editor.on('block:drag:stop', (block) => {
    console.log('Drag stopped:', block.get('label'));
  });

  editor.on('component:add', (component) => {
    console.log('Component added:', component.get('type'));
  });

  return editor;
};
