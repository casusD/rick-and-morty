import React from "react";
import "../../styles/locsCards.css";

export default function OnlyEpisode({ name, air_date, episode }) {
  return (
    <div className="locs">
      <div className="locsInfo">
        <p>
          <span>Name: </span> {name}
        </p>
        <p>
          <span>Air date: </span> {air_date}
        </p>
        <p>
          <span>Episode: </span> {episode}
        </p>
      </div>
    </div>
  );
}
