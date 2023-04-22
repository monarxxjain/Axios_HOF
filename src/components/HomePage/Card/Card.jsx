import React from "react";
import './Card.css'

function Card(props) {
  return (
    <div className="mr--card">
      <div className="mr--card inner">
        <img src={`../../../${props.img}`} className="card--image" />
        <div className="card--title">{props.title}</div>
        <div className="card--info">{props.info}</div>
      </div></div>
  );
}

export default Card;