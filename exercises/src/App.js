import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.value}</h1>
    </div>
  );
}

export default App;
