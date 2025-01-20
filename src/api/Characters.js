import React from "react";
import OnlyChar from "./OnlyChar";

export default function Characters(props) {
  const rows = [];

  props.chars.forEach((char) => {
    if (
      char.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1
    ) {
      return;
    }

    rows.push(
      <OnlyChar
        image={char.image}
        name={char.name}
        status={char.status}
        species={char.species}
        gender={char.gender}
        key={char.id}
        char={char}
      />
    );
  });

  return (
    <div className="charsBlock">
      {rows.map((char) => {
        return char;
      })}
    </div>
  );
}
