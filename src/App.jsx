import { useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import Weather from "./pages/Weather.jsx";
import TaskManager from "./pages/TaskManager.jsx"; // import it

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>PLP Task Manager</h1>
        </div>
      </header>

      {/* Main */}
      <main className="main">
        {/* Counter Card */}
        <div className="card">
          <div className="card-content">
            <p className="info-text">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>

            <div className="counter">
              <Button variant="danger" size="md" onClick={() => setCount(count - 1)}>
                -
              </Button>
              <span className="count">{count}</span>
              <Button variant="success" size="md" onClick={() => setCount(count + 1)}>
                +
              </Button>
            </div>

            <p className="info-text">Implement your TaskManager component here</p>
          </div>
        </div>

        {/* Weather Component */}
        <Weather />

        {/* Task Manager Component */}
        <TaskManager />

        {/* Placeholder for future API */}
        <div className="card mt-8">
          <h2>API / Future Section</h2>
          <p>Additional components or API data will be displayed here.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
