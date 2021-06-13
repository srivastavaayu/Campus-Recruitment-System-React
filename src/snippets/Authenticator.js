import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory, Redirect } from "react-router-dom";
import "../css/Header.css";
import "../css/Home.css";
import crslogo from "../img/crslogo.png";
import Select from "react-select";

function Authenticator(props) {
  let [authMode, setAuthMode] = useState(props.location.state.authMode);
  let [authTitle, setAuthTitle] = useState("");

  useEffect(() => {
    if (authMode === "login") {
      setAuthTitle("Login to Campus Recruitment System");
      document.getElementById("loginForm").style.display = "block";
      document.getElementById("registerForm").style.display = "None";
    } else {
      setAuthTitle("Signup on Campus Recruitment System");
      document.getElementById("loginForm").style.display = "None";
      document.getElementById("registerForm").style.display = "block";
    }
  }, [authMode]);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                className="float-start"
                src={crslogo}
                alt=""
                width="50px"
                height="auto"
              />
              <h1 id="headerBrandName" className="navbar-text">
                Campus Recruitment System
              </h1>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#homeAuthNavbarMenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="homeAuthNavbarMenu" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main id="homeAuthMain">
        <h2 className="text-center">{authTitle}</h2>
        <form id="loginForm" action="" method="POST">
          <div className="mb-3">
            <label className="form-label" htmlFor="InputLoginMemberType">
              Member Type
            </label>
            <Select
              id="InputLoginMemberType"
              placeholder="Select Option"
              name="member"
            />
          </div>
          <label className="form-label" htmlFor="InputLoginUsername">
            Username
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              id="InputLoginUsername"
              className="form-control"
              type="text"
              placeholder="Username"
              name="userName"
              required
            />
          </div>
          <label className="form-label" htmlFor="InputLoginPassword">
            Password
          </label>
          <div className="input-group mb-3">
            <input
              id="InputLoginPassword"
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <button
              id="homeAuthButtonForgotPassword"
              className="btn btn-outline-warning"
            >
              Forgot Password?
            </button>
          </div>
          <button
            className="btn btn-primary float-start"
            onClick={() =>
              setAuthMode(authMode === "login" ? "signup" : "login")
            }
          >
            New to Campus Recruitment System? Register here!
          </button>
          <button
            className="btn btn-success float-end"
            type="submit"
          >
            Login
          </button>
        </form>
        <form id="registerForm" action="" method="POST">
          <div className="mb-3">
            <label className="form-label" htmlFor="InputRegisterMemberType">
              Member Type
            </label>
            <Select
              id="InputRegisterMemberType"
              placeholder="Select Option"
              name="member"
            />
          </div>

          <label className="form-label" htmlFor="InputRegisterUsername">
            Username
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              id="InputRegisterUsername"
              className="form-control"
              type="text"
              placeholder="Username"
              name="userName"
              required
            />
          </div>
          <label className="form-label" htmlFor="InputRegisterName">
            Name
          </label>
          <div className="mb-3">
            <input
              id="InputRegisterName"
              className="form-control"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <label className="form-label" htmlFor="InputRegisterEmail">
            Email
          </label>
          <div className="mb-3">
            <input
              id="InputRegisterEmail"
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <label className="form-label" htmlFor="InputRegisterPassword">
            Password
          </label>
          <div className="input-group mb-3">
            <input
              id="InputRegisterPassword"
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>

          <label className="form-label" htmlFor="InputRegisterReenterPassword">
            Re-enter Password
          </label>
          <div className="input-group mb-3">
            <input
              id="InputRegisterReenterPassword"
              className="form-control"
              type="password"
              placeholder="Re-enter Password"
              name="rpassword"
              required
            />
          </div>
          <button
            className="btn btn-primary float-start"
            onClick={() =>
              setAuthMode(authMode === "login" ? "signup" : "login")
            }
          >
            Already have an account? Login here!
          </button>
          <button
            className="btn btn-success float-end"
            type="submit"
          >
            Register
          </button>
        </form>
      </main>
    </>
  );
}

export default Authenticator;
