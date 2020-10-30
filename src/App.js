import React, { useEffect } from "react";
import "./App.scss";

import Card from "./Components/Card/Card";
import Register from "./Components/Register/Register";

import cards from "./Data";

import anime from "animejs";

function App() {
  useEffect(() => {
    // Wrap every letter in a span
    let textWrapper = document.querySelector(".ml7 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".ml7 .letter",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i,
    });
  }, []);

  return (
    <div className="app">
      <div className="app__landing">
        <header className="app__header">
          <div className="app__logo"></div>
          <button className="app__cta">GET PASSES</button>
        </header>
        <h1 class="ml7">
          <span class="text-wrapper">
            <span class="letters">CONCLAVE</span>
          </span>
        </h1>
        <h2 className="app__heading-2">TECHTATVA'20 </h2>
        <div className="app__slideshow"></div>
        <div className="app__down-arrow"></div>
      </div>
      <h2 className="app__lineup">LINEUP</h2>
      <div className="app__cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
      <Register />
    </div>
  );
}

export default App;
