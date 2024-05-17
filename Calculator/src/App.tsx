import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        // Evaluate the expression safely
        const evaluatedResult = eval(display);
        setResult(evaluatedResult.toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="App">
      <Calculator
        display={display}
        result={result}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
