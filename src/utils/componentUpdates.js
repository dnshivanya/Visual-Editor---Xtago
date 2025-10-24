// Component update methods for GrapesJS components
export const createUpdateMethods = (componentType) => {
  const updateMethods = {};

  // Define update methods for each component type
  switch (componentType) {
    case 'custom-card':
      updateMethods.updateImageUrl = function() {
        const img = this.getEl().querySelector('img');
        if (img) {
          img.src = this.get('imageUrl') || 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop';
        }
      };
      updateMethods.updateTitle = function() {
        const title = this.getEl().querySelector('h3');
        if (title) {
          title.textContent = this.get('title') || 'Amazing Product';
        }
      };
      updateMethods.updateDescription = function() {
        const desc = this.getEl().querySelector('p');
        if (desc) {
          desc.textContent = this.get('description') || 'Discover our premium quality product that will transform your experience. Perfect for modern lifestyles.';
        }
      };
      updateMethods.updateButtonLabel = function() {
        const btn = this.getEl().querySelector('.btn');
        if (btn) {
          btn.textContent = this.get('buttonLabel') || 'Learn More';
        }
      };
      updateMethods.updateButtonLink = function() {
        const btn = this.getEl().querySelector('.btn');
        if (btn) {
          const link = this.get('buttonLink') || '#';
          btn.href = link;

          btn.removeEventListener('click', btn._navigationHandler);
          
          // Add click event handler for navigation
          btn._navigationHandler = function(e) {
            if (link && link !== '#') {
              e.preventDefault();
              window.open(link, '_blank');
            }
          };
          
          btn.addEventListener('click', btn._navigationHandler);
        }
      };
      break;

    case 'hero-section':
      updateMethods.updateMainTitle = function() {
        const title = this.getEl().querySelector('h1');
        if (title) {
          title.textContent = this.get('mainTitle') || 'Welcome to Our Platform';
        }
      };
      updateMethods.updateSubtitle = function() {
        const subtitle = this.getEl().querySelector('.hero-content p');
        if (subtitle) {
          subtitle.textContent = this.get('subtitle') || 'Build amazing websites with our powerful drag-and-drop editor. Create stunning designs in minutes.';
        }
      };
      updateMethods.updatePrimaryButton = function() {
        const btn = this.getEl().querySelector('.btn-primary');
        if (btn) {
          btn.textContent = this.get('primaryButton') || 'Get Started';
        }
      };
      updateMethods.updateSecondaryButton = function() {
        const btn = this.getEl().querySelector('.btn-secondary');
        if (btn) {
          btn.textContent = this.get('secondaryButton') || 'Learn More';
        }
      };
      updateMethods.updatePrimaryButtonLink = function() {
        const btn = this.getEl().querySelector('.btn-primary');
        if (btn) {
          const link = this.get('primaryButtonLink') || '#';
          btn.href = link;

          btn.removeEventListener('click', btn._navigationHandler);
          
          // Add click event handler for navigation
          btn._navigationHandler = function(e) {
            if (link && link !== '#') {
              e.preventDefault();
              window.open(link, '_blank');
            }
          };
          
          btn.addEventListener('click', btn._navigationHandler);
        }
      };
      updateMethods.updateSecondaryButtonLink = function() {
        const btn = this.getEl().querySelector('.btn-secondary');
        if (btn) {
          const link = this.get('secondaryButtonLink') || '#';
          btn.href = link;
          
          btn.removeEventListener('click', btn._navigationHandler);
          
          // Add click event handler for navigation
          btn._navigationHandler = function(e) {
            if (link && link !== '#') {
              e.preventDefault();
              window.open(link, '_blank');
            }
          };
          
          btn.addEventListener('click', btn._navigationHandler);
        }
      };
      updateMethods.updateHeroImage = function() {
        const img = this.getEl().querySelector('.hero-image img');
        if (img) {
          img.src = this.get('heroImage') || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop';
        }
      };
      break;

    case 'feature-grid':
      updateMethods.updateFeature1Title = function() {
        const title = this.getEl().querySelector('.feature-item:nth-child(1) h3');
        if (title) {
          title.textContent = this.get('feature1Title') || 'Fast Performance';
        }
      };
      updateMethods.updateFeature1Desc = function() {
        const desc = this.getEl().querySelector('.feature-item:nth-child(1) p');
        if (desc) {
          desc.textContent = this.get('feature1Desc') || 'Lightning-fast loading times and optimized performance for the best user experience.';
        }
      };
      updateMethods.updateFeature2Title = function() {
        const title = this.getEl().querySelector('.feature-item:nth-child(2) h3');
        if (title) {
          title.textContent = this.get('feature2Title') || 'Beautiful Design';
        }
      };
      updateMethods.updateFeature2Desc = function() {
        const desc = this.getEl().querySelector('.feature-item:nth-child(2) p');
        if (desc) {
          desc.textContent = this.get('feature2Desc') || 'Modern, responsive designs that look great on all devices and screen sizes.';
        }
      };
      updateMethods.updateFeature3Title = function() {
        const title = this.getEl().querySelector('.feature-item:nth-child(3) h3');
        if (title) {
          title.textContent = this.get('feature3Title') || 'Easy to Use';
        }
      };
      updateMethods.updateFeature3Desc = function() {
        const desc = this.getEl().querySelector('.feature-item:nth-child(3) p');
        if (desc) {
          desc.textContent = this.get('feature3Desc') || 'Intuitive interface that makes website building accessible to everyone.';
        }
      };
      break;

    case 'testimonial':
      updateMethods.updateTestimonialText = function() {
        const text = this.getEl().querySelector('.testimonial-content p');
        if (text) {
          text.textContent = `"${this.get('testimonialText') || 'This platform has completely transformed how we build websites. The ease of use and quality of results is outstanding.'}"`;
        }
      };
      updateMethods.updateAuthorName = function() {
        const name = this.getEl().querySelector('.author-info h4');
        if (name) {
          name.textContent = this.get('authorName') || 'John Smith';
        }
      };
      updateMethods.updateAuthorTitle = function() {
        const title = this.getEl().querySelector('.author-info span');
        if (title) {
          title.textContent = this.get('authorTitle') || 'CEO, TechCorp';
        }
      };
      updateMethods.updateAuthorImage = function() {
        const img = this.getEl().querySelector('.testimonial-author img');
        if (img) {
          img.src = this.get('authorImage') || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face';
        }
      };
      break;

    default:
      console.warn(`No update methods defined for component type: ${componentType}`);
  }

  return updateMethods;
};
