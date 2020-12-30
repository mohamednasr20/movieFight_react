import React from "react";
import { SearchProvider } from "./contexts/SearchTermState";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./component/Nav";
import { MoviesForm } from "./component/MoviesForm";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Nav />
        <div className="container">
          <MoviesForm />
        </div>
      </SearchProvider>
    </div>
  );
}

export default App;
