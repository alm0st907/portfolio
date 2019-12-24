import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import MainNav from './MainNav'


function App() {
  return (
    <div className="App">
      <MainNav></MainNav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a work in progress. Feel free to look at my resume or reach out to contact me in the meantime. 
        </p>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Don't take life too seriously. It will hamper your creativity.</a>
        </p>
        <Button className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Learn React!
        </Button>

        {/* <a>
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
