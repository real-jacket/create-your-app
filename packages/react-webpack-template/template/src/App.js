import React, { useState } from 'react';
import './App.css';
import Cat from './components/Cat/index.js';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <button className="App-button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <Cat className="cat" />
        <code className="code">
          Edit <code>src/App.js</code> and save to reload.
        </code>
      </header>
    </div>
  );
}

export default App;
