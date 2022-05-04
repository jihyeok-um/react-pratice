/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('test');

export default function MyApp() {
  const [theme, setTheme] = useState('dark');

  const handleClick = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  };

  return <Button onClick={handleClick} />;
}

function Button({ onClick }) {
  const buttonTheme = useContext(ThemeContext);
  const className = 'button-' + buttonTheme;
  return (
    <button className={className} onClick={onClick}>
      change Theme
    </button>
  );
}
