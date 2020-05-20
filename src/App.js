import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';
import Routes from './util/routes';

function App() {
  return (
    <div class='grid-2'>
      <BrowserRouter>
        <Sidebar />
        <div class='section-2'>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
