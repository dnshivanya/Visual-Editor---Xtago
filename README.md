# Visual Editor - Drag & Drop Website Builder

A modern, responsive drag-and-drop website builder built with React, Vite, and GrapesJS. Create stunning websites with custom components and real-time editing capabilities.

## ✨ Features

- **React + Vite Setup** - Modern development environment with fast hot reload
- **GrapesJS Integration** - Professional-grade visual editor
- **Custom Card Component** - Fully customizable card block with traits
- **Real-time Editing** - Live property updates as you type
- **Responsive Design** - Preview on Desktop, Tablet, and Mobile
- **Multiple Components** - Card, Hero Section, Feature Grid, and Testimonial blocks
- **Export as HTML** - Download your designs as complete HTML files
- **Modern UI** - Clean, professional interface with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd visual-editor
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── editor/
│   │   └── GrapesEditor.jsx    # Main editor component
│   └── ui/
│       └── EditorComponents.jsx # UI components (Header, Sidebar, etc.)
├── hooks/
│   └── useEditor.js           # Custom hooks for editor functionality
├── styles/
│   ├── animations.css         # Animation styles
│   ├── base.css              # Base styles
│   ├── components.css         # Component styles
│   ├── grapesjs.css          # GrapesJS custom styles
│   ├── layout.css            # Layout styles
│   ├── minimal.css           # Minimal theme styles
│   └── responsive.css         # Responsive styles
├── utils/
│   ├── componentDefinitions.js # Custom component definitions
│   ├── componentUpdates.js    # Component update handlers
│   ├── editorConfig.js       # Editor configuration
│   ├── editorSetup.js        # Editor initialization
│   └── minimalEditor.js      # Minimal editor setup
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Custom Components & Traits

### Custom Card Component ✅
**Fully registered as a custom block with working traits:**
- **Image URL** - Customize the card image
- **Title Text** - Edit the card title
- **Description** - Modify the card description
- **Button Label** - Change button text
- **Button Link** - Set button destination URL

### Hero Section Component ✅
**Complete with customizable properties:**
- **Main Title** - Primary heading text
- **Subtitle** - Supporting description
- **Primary Button Text** - Main CTA button
- **Secondary Button Text** - Secondary action
- **Button Links** - URLs for both buttons
- **Hero Image URL** - Background/side image

### Feature Grid Component ✅
**Three-column layout with individual traits:**
- **Feature 1-3 Titles** - Customize each feature heading
- **Feature 1-3 Descriptions** - Edit feature descriptions
- Responsive grid system with icons

### Testimonial Component ✅
**Customer testimonial with author details:**
- **Testimonial Text** - Customer quote
- **Author Name** - Customer name
- **Author Title** - Customer position/company
- **Author Image URL** - Customer photo

## 🔧 Customization

The editor uses GrapesJS for the core functionality. You can extend it by:

1. Adding new component types in `GrapesEditor.jsx`
2. Customizing styles in `styles/main.css`
3. Adding new traits/properties for components

## 📱 Responsive Design

The editor includes responsive preview modes:
- **Desktop** - Full-width layout
- **Tablet** - 768px width
- **Mobile** - 320px width

## 🎯 Usage

1. **Add Components** - Drag components from the sidebar to the canvas
2. **Edit Properties** - Select a component and edit its properties in real-time
3. **Preview** - Switch between device views to test responsiveness
4. **Export as HTML** - Click the 📥 export button to download your design

## 📥 Export as HTML Functionality ✅

**Complete export feature implemented:**
- **One-click Export** - Click the 📥 button in the device panel
- **Full HTML File** - Downloads complete HTML with embedded CSS
- **Responsive Design** - Includes viewport meta tag and responsive styles
- **Clean Structure** - Proper HTML5 document structure
- **Custom Styling** - All GrapesJS styles are embedded
- **Ready to Use** - Downloaded file can be opened in any browser

**Export includes:**
- Complete HTML document structure
- Embedded CSS styles from GrapesJS
- Responsive viewport configuration
- Professional container layout
- All custom component styles

## 🛡️ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

