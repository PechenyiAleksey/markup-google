import React from "react";

import "./App.css";
import { InputComponent } from "./components/Input/Input";
import img from "./assets/logous.png";
import { HeaderComponent } from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <HeaderComponent firstLink="Gmail" secondLink="Images" />
        <div className="central-block">
          <div className="central-logo">
            <img src={img} alt="Google" />
          </div>

          <div className="input_container">
            <InputComponent placeholder="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
