import React from "react";
import "./Card.scss";

export default function Card({ name, description, time, index }) {
  return (
    <div className="card">
      <div
        style={{ order: index % 2 === 0 ? -1 : 1 }}
        className="card__image-container"
      >
        <div className="card__image"></div>
      </div>
      <div className="card__box">
        <div className="card__name">{name}</div>
        <p className="card__description">{description}</p>
        <div className="card__time">
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
