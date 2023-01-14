import "../styles/mobilenav.css";
import Closebtn from "../imagesmb/icons/closeicon.png";
import Header from "./Header";
import { Fragment } from "react";

const Mobilenav = ({ mobileNavHandler }) => {
  return (
    <Fragment>
      <img
        className="b"
        onClick={mobileNavHandler}
        src={Closebtn}
        alt="Close icon"
      />
      ;
      <div className="mbnav-container">
        <a href="#" className="mbnav-a">
          Movies
        </a>
        <a href="#" className="mbnav-a">
          Gaming
        </a>
        <a href="#" className="mbnav-a">
          Night Out
        </a>
        <a href="#" className="mbnav-a">
          Sports
        </a>
        <a href="#" className="mbnav-a">
          Kids & Family
        </a>
        <a href="#" className="mbnav-a">
          Expos
        </a>
        <a href="#" className="mbnav-a">
          Food
        </a>
        <a href="#" className="mbnav-a">
          Concerts
        </a>
        <a href="#" className="mbnav-a">
          Festivals
        </a>
        <a href="#" className="mbnav-a">
          Outdoor
        </a>
      </div>
    </Fragment>
  );
};

export default Mobilenav;
