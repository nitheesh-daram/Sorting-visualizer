import React from "react";
import "./App.css";
import Bar from "./components/Bar/Bar";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Sorting Visualizer
        </a>
      </nav>
      <section className="whole_container">
        <div className="simulator">
          <Bar/>
          <Bar/>
        </div>
        <div className="controls">{/* creating controls */}</div>
      </section>
    </div>
  );
}
export default App;
