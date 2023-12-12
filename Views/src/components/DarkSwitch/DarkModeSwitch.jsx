// Import necessary React modules
import React, { useEffect, useState } from 'react';

// Import your CSS file or define styles using a CSS-in-JS solution like styled-components
import './DarkModeSwitch.css';

// Define your functional component
const DarkModeSwitch = () => {
  // Use state to manage the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use useEffect to initialize the theme on page load
  useEffect(() => {
    const darkThemeSelected = localStorage.getItem('darkSwitch') === 'dark';
    setIsDarkMode(darkThemeSelected);
  }, []);

  // Function to handle theme toggling
  const handleThemeToggle = () => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkSwitch', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('darkSwitch');
    }
  };

  return (
    <div>
      <label>
        Dark Mode
        <input
          type="checkbox"
          id="darkSwitch"
          checked={isDarkMode}
          onChange={() => {
            setIsDarkMode(!isDarkMode);
            handleThemeToggle();
          }}
        />
      </label>
    </div>
  );
};

// Export your component
export default DarkModeSwitch;
