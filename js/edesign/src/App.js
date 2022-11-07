import React from "react";
// import "./components/Move"
import "./components/Bibl"
import Bibl from "./components/Bibl";
import Header from "./components/UI/header/Header";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div>
          <Bibl/>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;

