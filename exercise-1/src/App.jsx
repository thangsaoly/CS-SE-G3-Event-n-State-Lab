import React, { useState } from 'react';
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setIsRaining] = useState(false);
  const title = isRaining ? 'Rain Time' : 'Sun Time';
  const background = isRaining ? 'rainy' : 'sunny';

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(false);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(true);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
      
      
    }
    
    function getBackgroundColor() {
      // This function manage the main class value, depending on the weather
  }

  return (
    <main className={background}>
      <h1>{title}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rainy Time</button>
    </main>
  );
}

export default App;
