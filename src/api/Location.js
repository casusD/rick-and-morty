import React from "react";
import OnlyLocs from "./OnlyLocs";

export default function Locations(props) {
  return (
    <div className="locsBlock">
      {props.locs.map((loc) => {
        return (
          <OnlyLocs
            name={loc.name}
            type={loc.type}
            key={loc.id}
            dimension={loc.dimension}
          />
        );
      })}
    </div>
  );
}
