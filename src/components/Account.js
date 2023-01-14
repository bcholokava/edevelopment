import React from "react";
import "../styles/Account.css";

import CloseBtn from "../imagesmb/icons/closeicon.png";
import rightIcon from "../imagesmb/icons/rightIcon.png";
import Exit from "../imagesmb/icons/exit.png";

const Account = ({ showAccNav }) => {
  return (
    <div className="account">
      <div className="account_close">
        <button className="account_btn" onClick={showAccNav}>
          <img className="account_btn_img" src={CloseBtn} alt="close" />
        </button>
      </div>
      <div className="account_home">
        <h3>Account</h3>
        <div className="account_home_div">
          <p>My Information</p>
          <img className="account_home_div_img" src={rightIcon} alt="right" />
        </div>
        <div className="account_home_div">
          <p>Favorite Places</p>
          <img className="account_home_div_img" src={rightIcon} alt="right" />
        </div>
        <div className="account_home_div">
          <p>Notifications</p>
          <img className="account_home_div_img" src={rightIcon} alt="right" />
        </div>
      </div>

      <div className="account_home">
        <h3>Settings</h3>
        <div className="account_home_div">
          <p>Language</p>
          <img className="account_home_div_img" src={rightIcon} alt="right" />
        </div>
        <div className="account_home_div">
          <p>Location</p>
          <img className="account_home_div_img" src={rightIcon} alt="right" />
        </div>
        <div className="account_home_div">
          <p>Appearance</p>
          <img className="account_home_div_img" src={rightIcon} alt="right" />
        </div>
      </div>

      <div className="account_home">
        <div className="account_home_div" style={{ alignItems: "center" }}>
          <p style={{ fontWeight: "600" }}>F.A.Q</p>
          <img className="account_home_div_img" src={rightIcon} alt="right" />
        </div>
        <div className="account_home_div" style={{ alignItems: "center" }}>
          <p style={{ fontWeight: "600" }}>Logout</p>
          <img
            style={{ width: "11px", height: "14px" }}
            className="account_home_div_img"
            src={Exit}
            alt="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
