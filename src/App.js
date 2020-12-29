import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./component/Nav";
import { MoviesForm } from "./component/MoviesForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <MoviesForm />
      </div>
    </div>
  );
}

export default App;
