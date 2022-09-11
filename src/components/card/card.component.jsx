import { Component } from "react";

import "./card.style.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt={`monster ${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
