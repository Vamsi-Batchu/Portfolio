import React from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import AppRouter from './Routes';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Contact from './containers/Contact';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.11
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
