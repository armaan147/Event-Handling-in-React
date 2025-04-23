import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h1>Event Handling in React</h1>
      <p>{message}</p>
      <input type="text" onChange={handleChange} placeholder="Type something..." />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;