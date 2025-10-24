// Editor configuration and constants
export const EDITOR_CONFIG = {
  height: '100vh',
  storageManager: false,
  plugins: [],
  canvas: {
    styles: [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    ],
    // Enable scrolling and increase canvas height
    height: 'auto',
    minHeight: '100vh',
    overflow: 'auto'
  },
  blockManager: {
    appendTo: '.blocks-container',
    open: true,
    clear: false
  },
  traitManager: {
    appendTo: '.traits-container'
  },
  selectorManager: {
    appendTo: '.styles-container'
  },
  layerManager: {
    appendTo: '.layers-container'
  },
  avoidInlineStyle: true,
  clearOnRender: false,
  showOffsets: false,
  forceClass: false,
  // Basic blocks will be added programmatically to avoid duplication
  panels: {
    defaults: [
      {
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: []
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: []
      }
    ]
  },
  deviceManager: {
    devices: [
      {
        name: 'Desktop',
        width: '',
      },
      {
        name: 'Tablet',
        width: '768px',
        widthMedia: '992px',
      },
      {
        name: 'Mobile',
        width: '320px',
        widthMedia: '768px',
      }
    ]
  }
};

export const DEVICE_COMMANDS = [
  {
    id: 'set-device-desktop',
    run: editor => {
      editor.setDevice('Desktop');
      document.querySelectorAll('.device-btn').forEach(btn => btn.classList.remove('gjs-pn-active'));
      const desktopBtn = document.querySelector('#device-desktop');
      if (desktopBtn) desktopBtn.classList.add('gjs-pn-active');
    },
    stop: () => {},
  },
  {
    id: 'set-device-tablet',
    run: editor => {
      editor.setDevice('Tablet');
      document.querySelectorAll('.device-btn').forEach(btn => btn.classList.remove('gjs-pn-active'));
      const tabletBtn = document.querySelector('#device-tablet');
      if (tabletBtn) tabletBtn.classList.add('gjs-pn-active');
    },
    stop: () => {},
  },
  {
    id: 'set-device-mobile',
    run: editor => {
      editor.setDevice('Mobile');
      document.querySelectorAll('.device-btn').forEach(btn => btn.classList.remove('gjs-pn-active'));
      const mobileBtn = document.querySelector('#device-mobile');
      if (mobileBtn) mobileBtn.classList.add('gjs-pn-active');
    },
    stop: () => {},
  }
];

export const EXPORT_COMMAND = {
  id: 'export-template',
  run: editor => {
    try {
      const html = editor.getHtml();
      const css = editor.getCss();
      
      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Card Template</title>
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
      
      const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'custom-card-template.html';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      editor.Modal.setTitle('✅ Export Successful!')
        .setContent(`
          <div style="text-align: center; padding: 20px;">
            <h3 style="color: #4CAF50; margin-bottom: 15px;">🎉 HTML File Downloaded!</h3>
            <p style="color: #666; margin-bottom: 10px;">Your custom card template has been saved as:</p>
            <p style="font-weight: bold; color: #333;">custom-card-template.html</p>
            <p style="color: #666; margin-top: 15px;">You can now use this file on any website!</p>
          </div>
        `)
        .open();
        
    } catch (error) {
      console.error('Export error:', error);
      editor.Modal.setTitle('❌ Export Error')
        .setContent(`
          <div style="text-align: center; padding: 20px;">
            <h3 style="color: #f44336; margin-bottom: 15px;">Export Failed</h3>
            <p style="color: #666;">There was an error exporting your template. Please try again.</p>
          </div>
        `)
        .open();
    }
  }
};
