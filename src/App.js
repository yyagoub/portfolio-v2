import React from 'react';
import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';

function App() {
  return (
    <div class='grid-2'>
      <Sidebar />
      <div class='section-2'>
        <About />
      </div>
    </div>
  );
}

export default App;
