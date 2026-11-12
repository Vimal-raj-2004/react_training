import { useState } from "react";
import "./App.css";

function App() {
  // State 1: counter value
  const [count, setCount] = useState(0);

  // State 2: theme ("light" or "dark")
  const [theme, setTheme] = useState("light");

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleThemeToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // Dynamic class: "app light" or "app dark"
    <div className={"app " + theme}>
      <div className="counter-box">
        <div className="top-row">
          <p className="mode-text">
            Current Mode: {theme === "light" ? "Light Mode" : "Dark Mode"}
          </p>
          <button className="btn btn-theme" onClick={handleThemeToggle}>
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
        </div>

        <h1>Counter App</h1>
        <p className="count-value">{count}</p>

        <div className="button-row">
          <button className="btn btn-decrement" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-increment" onClick={handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
