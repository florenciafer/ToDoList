import React from "react";
import "./styles/main.scss";
import AgregarTarea from "./components/AgregarTarea";

function App() {
  return (
    <div className="container">
      <h1 className="title">To Do</h1>
      <AgregarTarea />
    </div>
  );
}

export default App;