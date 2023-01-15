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
import { click } from "@testing-library/user-event/dist/click";

const filterImgs = [
  {
    id: 1,
    src: A,
    name: "tastings",
  },
  {
    id: 2,
    src: B,
    name: "theatre",
  },
  {
    id: 3,
    src: C,
    name: "sports",
  },
  {
    id: 4,
    src: D,
    name: "nightout",
  },
  {
    id: 5,
    src: E,
    name: "music",
  },
  {
    id: 6,
    src: F,
    name: "outdoors",
  },
  {
    id: 7,
    src: G,
    name: "concerts",
  },
  {
    id: 8,
    src: H,
    name: "kids",
  },
  {
    id: 9,
    src: I,
    name: "expos",
  },
  {
    id: 10,
    src: J,
    name: "movies",
  },
  {
    id: 11,
    src: K,
    name: "gaming",
  },
  {
    id: 12,
    src: L,
    name: "play",
  },
];
const Filter = (props) => {
  const [classN, setClassN] = useState(null);
  const handleClick = (image) => {
    setClassN(image);
  };

  const iterateImg = filterImgs.map((img) => {
    return (
      <img
        onClick={handleClick}
        src={img.src}
        key={img.id}
        className={img.name}
      />
    );
  });

  return (
    <div>
      <div className="filter-mb"> {iterateImg}</div>;
    </div>
  );
};

export default Filter;
