import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';

function App() {
  return (
    <div class='grid-2'>
      <BrowserRouter>
        <Sidebar />
        <div class='section-2'>
          <About />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
