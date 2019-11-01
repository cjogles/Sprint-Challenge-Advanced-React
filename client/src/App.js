import React from 'react';
import './App.css';
import Fifa from './components/Fifa';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>dark-mode</button>
        <Fifa />
      </div>
    </div>
  );
}

export default App;
