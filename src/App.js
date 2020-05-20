import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';

function App() {
  return (
    <div class='grid-2'>
      <Sidebar />
      <About />
    </div>
  );
}

export default App;
