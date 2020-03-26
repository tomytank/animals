import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  const [upCount, setUpCount] = useState(0);
  // upCount = 0;
  //const [upCount, setDownCount] = useState[]
  // function increaseCount => {
    // const myButton = Button.button` font-size: 1.5em; color: purple`;
    const StyledButton = styled.button`
      height: 50px;
      border-radius: 10px;
      background-color: aqua;
      font-size: medium;
    `;
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Current Count is: {upCount}</h1>
        <StyledButton onClick={()=> setUpCount(upCount+1)}>Click to increase count!</StyledButton>
        <p></p>
        <StyledButton onClick={()=> setUpCount(upCount-1)}>Click to decrease count!</StyledButton>
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
