import React from 'react';

const CardTest = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Custom Card Component Test</h1>
      <p>This demonstrates the custom card component with all required elements:</p>
      
      <div className="custom-card">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop" alt="Card Image"/>
        <h3>Amazing Product</h3>
        <p>Discover our premium quality product that will transform your experience. Perfect for modern lifestyles.</p>
        <a href="#" className="btn">Learn More</a>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Card Requirements Checklist:</h2>
        <ul>
          <li>✅ Image at the top</li>
          <li>✅ Title</li>
          <li>✅ Description text</li>
          <li>✅ Button (link)</li>
        </ul>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>How to use in GrapesJS Editor:</h2>
        <ol>
          <li>Open the GrapesJS editor</li>
          <li>Look for "Custom Card" in the Components panel</li>
          <li>Drag and drop the card onto the canvas</li>
          <li>Use the Properties panel to edit:
            <ul>
              <li>Image URL</li>
              <li>Title Text</li>
              <li>Description</li>
              <li>Button Label</li>
              <li>Button Link</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CardTest;
