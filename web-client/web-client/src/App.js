// import React, { useState } from "react"
import Login from "./components/Login"
import ProjectView from "./components/ProjectView";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/projectView" element={<ProjectView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
