import "../styles/header.css";
import accbtn from "../imagesmb/icons/accbtn.png";
import searchbtn from "../imagesmb/icons/searchbtn.png";
import navbtn from "../imagesmb/icons/navbtn.png";
import mapbtn from "../imagesmb/icons/mapbtn.png";
import Mobilenav from "./Mobilenav";
import Account from "./Account.js";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Header = () => {
  // For Mobile Navigation
  const [showMbNav, setShowMbNav] = useState(false);
  // Mobile Navigation Click Handler
  const mobileNavHandler = () => {
    setShowMbNav(!showMbNav);
  };
  

  // For Map

  return (
    <>
    <div>
      <div className="header-mb">
        <div className="icon-mb-wrp">
          <button className="icon-mb-wrp_btn">
            <Link to='/login'><img  src={accbtn} /></Link>
          </button>
          <img className="searchbtn-mb" src={searchbtn} />
        </div>
        <div>
          {showMbNav && <Mobilenav mobileNavHandler={mobileNavHandler} />}
        </div>

          <div className="icon-mb-wrp">
            <img src={navbtn} onClick={mobileNavHandler} />
            <img
              src={mapbtn}
              onClick={() => {
                console.log("beka");
              }}
            />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Header;
