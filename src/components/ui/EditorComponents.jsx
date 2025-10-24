import React, { useEffect } from 'react';

// Loading Screen Component
export const LoadingScreen = ({ isLoading, loadingProgress }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Loading Visual Editor</h2>
        <p>Preparing your creative workspace...</p>
        <div className="loading-progress">
          <div 
            className="loading-progress-bar" 
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <span className="loading-percentage">{Math.round(loadingProgress)}%</span>
      </div>
    </div>
  );
};

// Device Buttons Component
export const DeviceButtons = ({ editor }) => {
  useEffect(() => {
    if (!editor) return;

    const devicePanel = document.querySelector('.panel__devices');
    if (devicePanel) {
      devicePanel.innerHTML = `
        <button class="custom-device-btn active" data-device="Desktop">
          <span class="device-icon">🖥️</span>
        </button>
        <button class="custom-device-btn" data-device="Tablet">
          <span class="device-icon">📟</span>
        </button>
        <button class="custom-device-btn" data-device="Mobile">
          <span class="device-icon">📱</span>
        </button>
        <button class="btn-open-export">
          📥
        </button>
      `;
      
      const customButtons = devicePanel.querySelectorAll('.custom-device-btn');
      customButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          customButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          const device = button.dataset.device;
          editor.setDevice(device);
          
          const canvas = document.querySelector('.gjs-cv-canvas');
          if (canvas) {
            canvas.setAttribute('data-device', device);
          }
        });
      });
      
      const exportButton = devicePanel.querySelector('.btn-open-export');
      if (exportButton) {
        exportButton.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          try {
            const html = editor.getHtml();
            const css = editor.getCss();
            
            const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Template</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    ${css}
  </style>
</head>
<body>
  <div class="container">
    ${html}
  </div>
</body>
</html>`;
            
            const blob = new Blob([fullHtml], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'website-template.html';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          } catch (error) {
            console.error('Export failed:', error);
            alert('Export failed. Please try again.');
          }
        });
      }
    }
  }, [editor]);

  return null;
};

// Editor Header Component
export const EditorHeader = () => (
  <div className="panel__top" role="banner">
    <div className="panel__basic-actions">
      <div className="editor-title">
        <h2>Visual Editor</h2>
        <div className="editor-subtitle">Drag & Drop Website Builder</div>
      </div>
    </div>
    <div className="panel__devices" role="toolbar" aria-label="Device Preview Controls"></div>
  </div>
);

// Editor Sidebar Component
export const EditorSidebar = () => (
  <div className="panel__right" role="complementary" aria-label="Editor Controls">
    <div className="unified-panel">
      <div className="panel-section">
        <h3 className="section-title">📦 Components</h3>
        <div className="blocks-container"></div>
      </div>
      <div className="panel-section">
        <h3 className="section-title">⚙️ Properties</h3>
        <div className="traits-container"></div>
      </div>
    </div>
  </div>
);
