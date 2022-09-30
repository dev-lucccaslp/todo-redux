import React from 'react';
import { useSelector } from 'react-redux';

import { selectDarkMode } from './features/slices/themeSlice';

import { Save } from './hooks/useTheme'

import './App.scss';

import Todos from './Todos'

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={`app ${!darkMode ? "whiteBg" : ""}`}>
      <div className={`header ${!darkMode ? "whiteBg" : ""}`}></div>
      <Todos />
    </div>
  );
}

export default App;
