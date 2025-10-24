// Component definitions and block manager configurations
export const COMPONENT_BLOCKS = {
  'custom-card': {
    label: 'Custom Card',
    category: 'Custom Components',
    content: {
      type: 'custom-card',
      content: `
        <div class="custom-card">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop" alt="Card Image"/>
          <h3>Amazing Product</h3>
          <p>Discover our premium quality product that will transform your experience. Perfect for modern lifestyles.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
      `
    }
  },
  'hero-section': {
    label: 'Hero Section',
    category: 'Custom Components',
    content: {
      type: 'hero-section',
      content: `
        <div class="hero-section">
          <div class="hero-content">
            <h1>Welcome to Our Platform</h1>
            <p>Build amazing websites with our powerful drag-and-drop editor. Create stunning designs in minutes.</p>
            <div class="hero-buttons">
              <a href="#" class="btn btn-primary">Get Started</a>
              <a href="#" class="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Hero Image"/>
          </div>
        </div>
      `
    }
  },
  'feature-grid': {
    label: 'Feature Grid',
    category: 'Custom Components',
    content: {
      type: 'feature-grid',
      content: `
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast loading times and optimized performance for the best user experience.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Modern, responsive designs that look great on all devices and screen sizes.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔧</div>
            <h3>Easy to Use</h3>
            <p>Intuitive interface that makes website building accessible to everyone.</p>
          </div>
        </div>
      `
    }
  },
  'testimonial': {
    label: 'Testimonial',
    category: 'Custom Components',
    content: {
      type: 'testimonial',
      content: `
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"This platform has completely transformed how we build websites. The ease of use and quality of results is outstanding."</p>
          </div>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="Author"/>
            <div class="author-info">
              <h4>John Smith</h4>
              <span>CEO, TechCorp</span>
            </div>
          </div>
        </div>
      `
    }
  }
};

export const COMPONENT_TRAITS = {
  'custom-card': [
    {
      type: 'text',
      name: 'imageUrl',
      label: 'Image URL',
      changeProp: 1,
      placeholder: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
      attributes: {
        maxlength: 2000
      }
    },
    {
      type: 'text',
      name: 'title',
      label: 'Title Text',
      changeProp: 1,
      placeholder: 'Amazing Product'
    },
    {
      type: 'text',
      name: 'description',
      label: 'Description',
      changeProp: 1,
      placeholder: 'Discover our premium quality product...'
    },
    {
      type: 'text',
      name: 'buttonLabel',
      label: 'Button Label',
      changeProp: 1,
      placeholder: 'Learn More'
    },
    {
      type: 'text',
      name: 'buttonLink',
      label: 'Button Link',
      changeProp: 1,
      placeholder: 'https://example.com'
    }
  ],
  'hero-section': [
    {
      type: 'text',
      name: 'mainTitle',
      label: 'Main Title',
      changeProp: 1,
      placeholder: 'Welcome to Our Platform'
    },
    {
      type: 'text',
      name: 'subtitle',
      label: 'Subtitle',
      changeProp: 1,
      placeholder: 'Build amazing websites with our powerful editor...'
    },
    {
      type: 'text',
      name: 'primaryButton',
      label: 'Primary Button Text',
      changeProp: 1,
      placeholder: 'Get Started'
    },
    {
      type: 'text',
      name: 'secondaryButton',
      label: 'Secondary Button Text',
      changeProp: 1,
      placeholder: 'Learn More'
    },
    {
      type: 'text',
      name: 'primaryButtonLink',
      label: 'Primary Button Link',
      changeProp: 1,
      placeholder: 'https://example.com'
    },
    {
      type: 'text',
      name: 'secondaryButtonLink',
      label: 'Secondary Button Link',
      changeProp: 1,
      placeholder: 'https://example.com'
    },
    {
      type: 'text',
      name: 'heroImage',
      label: 'Hero Image URL',
      changeProp: 1,
      placeholder: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  ],
  'feature-grid': [
    {
      type: 'text',
      name: 'feature1Title',
      label: 'Feature 1 Title',
      changeProp: 1,
      placeholder: 'Fast Performance'
    },
    {
      type: 'text',
      name: 'feature1Desc',
      label: 'Feature 1 Description',
      changeProp: 1,
      placeholder: 'Lightning-fast loading times...'
    },
    {
      type: 'text',
      name: 'feature2Title',
      label: 'Feature 2 Title',
      changeProp: 1,
      placeholder: 'Beautiful Design'
    },
    {
      type: 'text',
      name: 'feature2Desc',
      label: 'Feature 2 Description',
      changeProp: 1,
      placeholder: 'Modern, responsive designs...'
    },
    {
      type: 'text',
      name: 'feature3Title',
      label: 'Feature 3 Title',
      changeProp: 1,
      placeholder: 'Easy to Use'
    },
    {
      type: 'text',
      name: 'feature3Desc',
      label: 'Feature 3 Description',
      changeProp: 1,
      placeholder: 'Intuitive interface...'
    }
  ],
  'testimonial': [
    {
      type: 'text',
      name: 'testimonialText',
      label: 'Testimonial Text',
      changeProp: 1,
      placeholder: 'This platform has completely transformed...'
    },
    {
      type: 'text',
      name: 'authorName',
      label: 'Author Name',
      changeProp: 1,
      placeholder: 'John Smith'
    },
    {
      type: 'text',
      name: 'authorTitle',
      label: 'Author Title',
      changeProp: 1,
      placeholder: 'CEO, TechCorp'
    },
    {
      type: 'text',
      name: 'authorImage',
      label: 'Author Image URL',
      changeProp: 1,
      placeholder: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    }
  ]
};
