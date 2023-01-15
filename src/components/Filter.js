import A from "../imagesmb/filters/tastings.png";
import B from "../imagesmb/filters/theatre.png";
import C from "../imagesmb/filters/sports.png";
import D from "../imagesmb/filters/nightout.png";
import E from "../imagesmb/filters/music.png";
import F from "../imagesmb/filters/outdoors.png";
import G from "../imagesmb/filters/edu.png";
import H from "../imagesmb/filters/kids.png";
import I from "../imagesmb/filters/expos.png";
import J from "../imagesmb/filters/movies.png";
import K from "../imagesmb/filters/gaming.png";
import L from "../imagesmb/filters/play.png";
import "../styles/filter.css";
import { useRef, useEffect, useState } from "react";
import FilterState from "./FilterState";

const filterImgs = [
  {
    id: 1,
    src: A,
    name: ["tastings", "tastingsOP"],
  },
  {
    id: 2,
    src: B,
    name: ["theatre", "theatOP"],
  },
  {
    id: 3,
    src: C,
    name: ["sports", "sportsOP"],
  },
  {
    id: 4,
    src: D,
    name: ["nightout", "nightoutOP"],
  },
  {
    id: 5,
    src: E,
    name: ["music", "musicOP"],
  },
  {
    id: 6,
    src: F,
    name: ["outdoors", "outdoorsOP"],
  },
  {
    id: 7,
    src: G,
    name: ["edu", "eduOP"],
  },
  {
    id: 8,
    src: H,
    name: ["kids", "kidsOP"],
  },
  {
    id: 9,
    src: I,
    name: ["expos", "exposOP"],
  },
  {
    id: 10,
    src: J,
    name: ["movies", "moviesOP"],
  },
  {
    id: 11,
    src: K,
    name: ["gaming", "gamingOP"],
  },
  // {
  //   id: 12,
  //   src: L,
  //   name: ["play"],
  // },
];
const Filter = (props) => {
  // const iterateImg = filterImgs.map((img) => {
  //   return <img src={img.src} key={img.id} className={img.name} />;
  // });

  return (
    <div>
      <div className="filter-mb">
        {filterImgs.map((img) => {
          return <FilterState src={img.src} key={img.id} name={img.name} />;
        })}
      </div>
      ;
    </div>
  );
};

export default Filter;
