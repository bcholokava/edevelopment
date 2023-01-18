import React from "react";
import "../styles/Login.css";
import CloseBtn from "../imagesmb/icons/closeicon.png";
import Lines from "./Lines";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const Login = ({ showAccNav }) => {
  const url = "https://localhost:7198/api/Account/login";
  let [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    let newLogin = { ...login };
    newLogin[e.target.id] = e.target.value;
    setLogin(newLogin);
    console.log(newLogin);
  }

  async function submitLogin(e) {
    console.log(e);
    e.preventDefault();
    var modelLogin = {
      email: login.email,
      password: login.password,
    };

    await Axios.post(url, modelLogin)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="login">
      <div className="login_close">
        <button className="login_btn" onClick={showAccNav}>
          <Link to="/">
            <img className="login_btn_img" src={CloseBtn} alt="close" />
          </Link>
        </button>
      </div>
      <div className="login_home">
        <h3 className="login_title">Log In to Your Account</h3>
        <form onSubmit={(e) => submitLogin(e)}>
          <div className="login_home_inputs">
            <input
              onChange={(e) => handleLogin(e)}
              type="text"
              placeholder="Email address"
              id="email"
            />
            <input
              onChange={(e) => handleLogin(e)}
              type="text"
              placeholder="Password"
              id="password"
            />
            <button type="submit" className="btn_btn">
              Log In
            </button>
          </div>
        </form>
      </div>
      <div>
        <button className="login_span">Forgot password?</button>
      </div>

      <div className="login_group">
        <div className="login_group_gr">
          <h3>Don’t have an account?</h3>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>

        <div className="login_line">
          <Lines />
        </div>
      </div>
    </div>
  );
};

export default Login;
