import A from "../imagesmb/filters/tastings.png";
import B from "../imagesmb/filters/theatre.png";
import C from "../imagesmb/filters/sports.png";
import D from "../imagesmb/filters/nightout.png";
import E from "../imagesmb/filters/music.png";
import F from "../imagesmb/filters/outdoors.png";
import G from "../imagesmb/filters/concerts.png";
import H from "../imagesmb/filters/kids.png";
import I from "../imagesmb/filters/expos.png";
import J from "../imagesmb/filters/movies.png";
import K from "../imagesmb/filters/gaming.png";
import L from "../imagesmb/filters/play.png";
import "../styles/filter.css";
import { useRef, useEffect, useState } from "react";
import { set } from "animejs";

const Filter = () => {
  const [style, setStyle] = useState(false);
  const changeOpacity = (event) => {
    setStyle(!style);
  };

  return (
    <div className="filter-mb">
      <img className="play" src={L} alt="Play button icon" />
      <img className="gaming" src={K} alt="Play button icon" />
      <img className="expos" src={I} alt="Play button icon" />
      <img className="kids" src={H} alt="Play button icon" />
      <img className="movies" src={J} alt="Play button icon" />
      <img className="concerts" src={G} alt="Play button icon" />
      <img className="outdoors" src={F} alt="Play button icon" />
      <img className="music" src={E} alt="Play button icon" />
      <img className="nightout" src={D} alt="Play button icon" />
      <img className="sports" src={C} alt="Play button icon" />
      <img className="theatre" src={B} alt="Play button icon" />
      <img
        style={{ opacity: style ? 1 : 0.6 }}
        onClick={changeOpacity}
        className="tastings"
        src={A}
        alt="Play button icon"
      />
    </div>
  );
};

export default Filter;
