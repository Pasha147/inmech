import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { nav } from "./appdata";



function App() {

  const [curArticle, setCurArticle] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
       
      {nav.map((item) => {
          return (
            <Link
              className={`navLink ${
                item.id === curArticle ? "navBtn-active" : ""
              }`}
              key={item.id}
              onClick={() => setCurArticle(item.id)}
              to={item.route}
            >
              {item.name}
            </Link>
          );
        })}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
