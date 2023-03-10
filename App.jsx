import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
        <button onClick={() => setCount(count + 1)}>Click {count}</button>
  );
}
export default App;
