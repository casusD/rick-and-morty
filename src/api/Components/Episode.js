import React from "react";
import OnlyEpisode from "./OnlyEpisode";

export default function Episodes(props) {
  return (
    <div className="locsBlock">
      {props.episode.map((epe) => {
        return (
          <OnlyEpisode
            name={epe.name}
            air_date={epe.air_date}
            key={epe.id}
            episode={epe.episode}
          />
        );
      })}
    </div>
  );
}
