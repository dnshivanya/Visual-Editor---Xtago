import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import { EDITOR_CONFIG, DEVICE_COMMANDS, EXPORT_COMMAND } from './editorConfig.js';
import { COMPONENT_BLOCKS, COMPONENT_TRAITS } from './componentDefinitions.js';
import { createUpdateMethods } from './componentUpdates.js';

// Initialize GrapesJS editor
export const initializeEditor = (container) => {
  const editor = grapesjs.init({
    ...EDITOR_CONFIG,
    container: container,
    commands: {
      defaults: [
        ...DEVICE_COMMANDS,
        EXPORT_COMMAND
      ]
    }
  });

  return editor;
};

// Register component blocks
export const registerComponentBlocks = (editor) => {
  Object.entries(COMPONENT_BLOCKS).forEach(([key, block]) => {
    editor.BlockManager.add(key, block);
    console.log(`Added block: ${key}`);
  });
};

// Register component types with traits and update methods
export const registerComponentTypes = (editor) => {
  Object.entries(COMPONENT_TRAITS).forEach(([componentType, traits]) => {
    editor.DomComponents.addType(componentType, {
      model: {
        defaults: {
          tagName: 'div',
          classes: [componentType],
          traits: traits
        },
        init() {
          // Set up event listeners for each trait
          traits.forEach(trait => {
            if (trait.name) {
              this.on(`change:${trait.name}`, this[`update${trait.name.charAt(0).toUpperCase() + trait.name.slice(1)}`]);
            }
          });
        },
        ...createUpdateMethods(componentType)
      }
    });
  });
};

// Setup editor event listeners
export const setupEditorListeners = (editor, onLoad) => {
  editor.on('load', () => {
    console.log('Editor loaded successfully');
    
    // Ensure block manager is properly initialized
    const blockManager = editor.BlockManager;
    if (blockManager) {
      console.log('Block manager initialized');
      console.log('Available blocks:', blockManager.getAll());
      console.log('Blocks container:', document.querySelector('.blocks-container'));
      
      // Force render blocks
      blockManager.render();
      
      // Check if blocks are rendered in DOM
      setTimeout(() => {
        const blocks = document.querySelectorAll('.gjs-block');
        console.log('Rendered blocks:', blocks.length);
        if (blocks.length > 0) {
          console.log('Blocks are rendered successfully!');
          blocks.forEach((block, index) => {
            console.log(`Block ${index}:`, block);
          });
        } else {
          console.log('No blocks found in DOM - retrying render...');
          blockManager.render();
        }
      }, 1000);
    }
    
    // Add default card if canvas is empty
    const canvasBody = editor.Canvas.getBody();
    if (canvasBody && canvasBody.children.length === 0) {
      editor.setComponents('');
      editor.DomComponents.addComponent({
        type: 'custom-card',
        content: `
          <div class="custom-card">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop" alt="Card Image"/>
            <h3>Amazing Product</h3>
            <p>Discover our premium quality product that will transform your experience. Perfect for modern lifestyles.</p>
            <a href="#" class="btn">Learn More</a>
          </div>
        `
      });
    }

    const deviceButtons = document.querySelectorAll('.panel__devices .gjs-pn-btn');
    if (deviceButtons.length > 3) {
      for (let i = 3; i < deviceButtons.length; i++) {
        deviceButtons[i].remove();
      }
    }

    // Add drag and drop event listeners for debugging and functionality
    editor.on('block:drag:start', (block) => {
      console.log('DRAG STARTED!', block.get('label'));
      // Add visual feedback
      document.body.classList.add('dragging-active');
    });

    editor.on('block:drag:stop', (block) => {
      console.log('DRAG STOPPED!', block.get('label'));
      // Remove visual feedback
      document.body.classList.remove('dragging-active');
    });

    editor.on('component:add', (component) => {
      console.log('COMPONENT ADDED!', component.get('type'));
      // Ensure proper rendering
      setTimeout(() => {
        editor.refresh();
      }, 100);
    });

    // Handle canvas drop events
    editor.on('canvas:drag:stop', () => {
      console.log('Canvas drop completed');
      editor.refresh();
    });

    // Call the onLoad callback
    if (onLoad) {
      onLoad();
    }
  });
};

// Complete editor setup
export const setupEditor = (container, onLoad) => {
  const editor = initializeEditor(container);
  registerComponentBlocks(editor);
  registerComponentTypes(editor);
  setupEditorListeners(editor, onLoad);
  
  return editor;
};