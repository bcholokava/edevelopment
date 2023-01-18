import React, { useState } from "react";
import "../styles/signup.css";
import Lines from "./Lines";
import CloseBtn from "../imagesmb/icons/closeicon.png";
import Home from "./Home";
import { Link } from "react-router-dom";
import Axios from "axios";

const Signup = () => {
  const url = "https://localhost:7198/api/Account/register";
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handle(e) {
    let newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  async function submit(e) {
    console.log(e);
    e.preventDefault();
    var model = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    await Axios.post(url, model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="signup">
      <div className="signup_close">
        <button className="signup_btn">
          <Link to="/">
            <img className="signup_btn_img" src={CloseBtn} alt="close" />
          </Link>
        </button>
      </div>
      <div className="signup_home">
        <h3 className="signup_title">Join Eventa!</h3>

        <div className="signup_group_gr">
          <h3>Already have an account?</h3>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>

        <div className="signup_home_inputs">
          <form onSubmit={(e) => submit(e)}>
            <div className="signup_home_input">
              <input
                onChange={(e) => handle(e)}
                id="firstName"
                style={{ marginRight: "0.7rem", width: "13rem" }}
                type="text"
                placeholder="First name"
              />
              <input
                onChange={(e) => handle(e)}
                id="lastName"
                style={{ width: "13rem" }}
                type="text"
                placeholder="Last name"
              />
            </div>
            <div>
              <input
                onChange={(e) => handle(e)}
                id="email"
                type="text"
                placeholder="Email address"
              />
              <input
                onChange={(e) => handle(e)}
                id="password"
                type="password"
                placeholder="Password"
              />
              <input
                onChange={(e) => handle(e)}
                id="confirmPassword"
                type="password"
                placeholder="Repeat password"
              />
            </div>

            <div className="signup_group_gr2">
              <h3>
                By creating an account, I agree with Eventa’s{" "}
                <button>Privacy Policy</button> and{" "}
                <button>Terms of Service.</button>
              </h3>
            </div>

            <div style={{ marginTop: "6rem" }}>
              <button type="submit" className="btn_btn">
                Sign Up
              </button>
            </div>
          </form>
          {/* <div className="login_line">
            / <Lines />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
