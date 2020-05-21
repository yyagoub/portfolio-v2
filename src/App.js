import React from 'react';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';
import Routes from './util/routes';

function App() {
  return (
    <div className='grid-2'>
      <BrowserRouter>
        <Sidebar />
        <div className='section-2'>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
