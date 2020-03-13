import React from 'react';
import Fifa from './components/Fifa';
import { useDarkMode } from './hooks/useDarkMode';
import './index.css';

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (

    <>
      <nav className="navBar">
        <div className="dark-mode__toggle">
          <div
            data-testid="dark-btn"
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}>
          </div>
        </div>
      </nav>
      <div className="App">
        <Fifa />
      </div>
    </>

  );
}

export default App;
