import React from "react"
import Login from "./components/Login"
import ProjectView from "./components/ProjectView";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectView />
      </header>
    </div>
  );
}

export default App;
