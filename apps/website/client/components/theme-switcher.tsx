import { useTheme } from 'next-themes';
import React from 'react';
import {FaCode} from 'react-icons/fa';
import tw from 'twin.macro';

const StyledButton = tw.button``;

/**
 * Switch between light and dark mode
 * @constructor
 */
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/*The current theme is: {theme}*/}
      <StyledButton
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <FaCode className="text-3xl hover:text-devConceptsYellow-600" />
        ) : (
          <FaCode className="text-3xl hover:text-devConceptsGray-400" />
        )}
      </StyledButton>
    </>
  );
};

export default ThemeSwitcher;
