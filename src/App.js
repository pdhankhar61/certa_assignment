import { useState, useRef } from "react";
import "./styles.css";
//created outside so that it does not get change during rerenders.
let timer;

export default function App() {
  const [counter, setCounter] = useState(0); // storing state of counterer.
  const buttonRef = useRef(null); // reference to button
  const resetBtn = useRef(null);

  //handling reset button
  const handleReset = () => {
    clearInterval(timer);
    buttonRef.current.innerText = "Start";
    setCounter(0);
  };

  //handling start button
  const handleClick = () => {
    //getting inner text of button to check the state of timer.
    const condition = buttonRef.current.innerText;

    if (condition === "Start") {
      //starting timer and updating button text.
      timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);

      buttonRef.current.innerText = "Pause";
    } else {
      //pausing timer
      // removing timer and updating button text.
      clearInterval(timer);
      buttonRef.current.innerText = "Start";
    }
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button ref={buttonRef} onClick={handleClick}>
        Start
      </button>
      <br />
      <br />
      <button ref={resetBtn} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
