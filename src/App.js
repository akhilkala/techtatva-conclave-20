import React from "react";
import "./App.scss";

import Card from "./Components/Card/Card";

import cards from "./Data";

function App() {
  return (
    <div className="app">
      <div className="app__landing">
        <header className="app__header">
          <div className="app__logo"></div>
          <button className="app__cta">GET PASSES</button>
        </header>
        <h1 className="app__heading">CONCLAVE</h1>
        <h2 className="app__heading-2">TECHTATVA'20 </h2>
        <div className="app__slideshow"></div>
        <div className="app__down-arrow"></div>
      </div>
      <div className="app__cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
