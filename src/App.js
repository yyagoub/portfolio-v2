import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      <div class='grid-2'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
