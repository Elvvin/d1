import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Home() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const themeStyles = {
        height: '100vh',
        backgroundColor: isDarkMode ? '#000' : '#FFF',
        color: isDarkMode ? '#FFF' : '#000',
        textAlign: 'center',
        alignContent: 'center'
    };

    return (
        <div style={themeStyles}>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Home;
