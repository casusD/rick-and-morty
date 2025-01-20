import React from "react";
import "../styles/locsCards.css";

export default function OnlyLocs({ name, type, dimension }) {
  return (
    <div className="locs">
      <div className="locsInfo">
        <p>
          <span>Name: </span> {name}
        </p>
        <p>
          <span>Type: </span> {type}
        </p>
        <p>
          <span>Dimension: </span> {dimension}
        </p>
      </div>
    </div>
  );
}
