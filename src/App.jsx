import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
  // Boolean state: false = logged out, true = logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="app">
      {/* Ternary operator: show Home if logged in, otherwise Login */}
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
