import React, { useContext } from "react";
import "../styles/charsKards.css";
import Context from "../Context";

export default function OnlyChar({
  name,
  status,
  species,
  gender,
  image,
  char,
}) {
  const { handleCharacterClick } = useContext(Context);
  return (
    <div className="chars" onClick={() => handleCharacterClick(char)}>
      <div className="charImage">
        <img src={image} alt="#" />
      </div>

      <div className="info">
        <p>
          <span>Name: </span>
          {status === "Alive" ? "🍀" : status === "unknown" ? "🔘" : "💀"}
          {name}
        </p>
        <p>
          {" "}
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Species: </span> {species}
        </p>
      </div>
    </div>
  );
}
