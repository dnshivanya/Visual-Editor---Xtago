import { useEffect, useState } from 'react';

// Custom hook for loading simulation
export const useLoadingSimulation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const completeLoading = () => {
    setLoadingProgress(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          // Auto-complete loading after 2 seconds if not manually completed
          setTimeout(() => {
            if (isLoading) {
              completeLoading();
            }
          }, 2000);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isLoading]);

  return {
    isLoading,
    loadingProgress,
    completeLoading
  };
};

// Custom hook for real-time input listeners with debouncing
export const useRealTimeInputListeners = (editor) => {
  useEffect(() => {
    if (!editor) return;

    // Debounce function to prevent excessive triggering
    const debounce = (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    const addRealTimeListeners = () => {
      const traitInputs = document.querySelectorAll('.gjs-trait input[type="text"]');
      traitInputs.forEach(input => {
        // Remove any existing listeners first
        input.removeEventListener('input', debouncedHandleRealTimeInput);
        // Add the debounced listener
        input.addEventListener('input', debouncedHandleRealTimeInput);
        // Mark input to prevent duplicate listeners
        input._hasRealTimeListener = true;
      });
    };
    
    const handleRealTimeInput = (e) => {
      const input = e.target;
      const traitContainer = input.closest('.gjs-trait');
      if (!traitContainer) return;
      
      const labelElement = traitContainer.querySelector('.gjs-trait-label');
      if (!labelElement) return;
      
      const labelText = labelElement.textContent.toLowerCase().replace(/\s+/g, '');
      const value = input.value;
      
      const propertyMap = {
        'imageurl': 'imageUrl',
        'titletext': 'title',
        'description': 'description', 
        'buttonlabel': 'buttonLabel',
        'buttonlink': 'buttonLink',
        'maintitle': 'mainTitle',
        'subtitle': 'subtitle',
        'primarybutton': 'primaryButton',
        'secondarybutton': 'secondaryButton',
        'heroimage': 'heroImage',
        'feature1title': 'feature1Title',
        'feature1desc': 'feature1Desc',
        'feature2title': 'feature2Title',
        'feature2desc': 'feature2Desc',
        'feature3title': 'feature3Title',
        'feature3desc': 'feature3Desc',
        'testimonialtext': 'testimonialText',
        'authorname': 'authorName',
        'authortitle': 'authorTitle',
        'authorimage': 'authorImage'
      };
      
      const propertyName = propertyMap[labelText];
      if (propertyName) {
        const selectedComponent = editor.getSelected();
        if (selectedComponent) {
          console.log('Updating property:', propertyName, 'with value:', value);
          selectedComponent.set(propertyName, value);
          
          // Special handling for component-specific update methods
          if (propertyName === 'imageUrl' && typeof selectedComponent.updateImage === 'function') {
            console.log('Triggering image update method');
            selectedComponent.updateImage();
          } else if (propertyName === 'mainTitle' && typeof selectedComponent.updateMainTitle === 'function') {
            console.log('Triggering main title update method');
            selectedComponent.updateMainTitle();
          } else if (propertyName === 'subtitle' && typeof selectedComponent.updateSubtitle === 'function') {
            console.log('Triggering subtitle update method');
            selectedComponent.updateSubtitle();
          } else if (propertyName === 'primaryButton' && typeof selectedComponent.updatePrimaryButton === 'function') {
            console.log('Triggering primary button update method');
            selectedComponent.updatePrimaryButton();
          } else if (propertyName === 'secondaryButton' && typeof selectedComponent.updateSecondaryButton === 'function') {
            console.log('Triggering secondary button update method');
            selectedComponent.updateSecondaryButton();
          } else if (propertyName === 'heroImage' && typeof selectedComponent.updateHeroImage === 'function') {
            console.log('Triggering hero image update method');
            selectedComponent.updateHeroImage();
          }
          
          // Force update the component
          selectedComponent.trigger('change:attributes');
          selectedComponent.trigger('change:content');
        }
      }
    };

    // Debounced version with 300ms delay for better responsiveness
    const debouncedHandleRealTimeInput = debounce(handleRealTimeInput, 300);
    
    addRealTimeListeners();
    editor.on('component:selected', addRealTimeListeners);
    editor.on('trait:update', addRealTimeListeners);

    return () => {
      editor.off('component:selected', addRealTimeListeners);
      editor.off('trait:update', addRealTimeListeners);
      // Clean up all input listeners
      const traitInputs = document.querySelectorAll('.gjs-trait input[type="text"]');
      traitInputs.forEach(input => {
        input.removeEventListener('input', debouncedHandleRealTimeInput);
        input._hasRealTimeListener = false;
      });
    };
  }, [editor]);
};
