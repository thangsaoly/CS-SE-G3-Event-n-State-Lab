import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [valueA , setValueA] = useState();
  const [valueB , setValueB] = useState();
  const [result , setResult] = useState();
  const [error , setError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function onA(e){
    setValueA(e.target.value)
  }
  function onB(e){
    setValueB(e.target.value)
  }
  function handleOnClick(){
    if (!Number.isNaN(Number(valueA)) && !Number.isNaN(Number(valueB))) {
      const intA = parseInt(valueA);
      const intB = parseInt(valueB);
      setResult(intA + intB)
      setError(false)
    } else {
      setError(true)
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled className={ error ? "error" : null } value={error ? "A and B shall be number!" : result } />
      <button onClick={handleOnClick}>Compute</button>
    </main>
  );
}

export default App;
