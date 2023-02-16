import { useTheme } from 'next-themes';
import React from 'react';
import { FaCode } from 'react-icons/fa';

/**
 * Switch between light and dark mode
 * @constructor
 */
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/*The current theme is: {theme}*/}
      <button aria-label="Toggle Dark Mode" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? (
          <FaCode className="text-3xl hover:text-devConceptsYellow-600" />
        ) : (
          <FaCode className="text-3xl hover:text-devConceptsGray-400" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
