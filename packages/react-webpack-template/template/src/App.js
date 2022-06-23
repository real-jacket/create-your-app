import React, { useState } from 'react';
import Cat from './components/Cat.js';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Cat />
    </div>
  );
}

export default App;
