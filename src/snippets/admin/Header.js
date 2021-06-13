import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/Header.css";
import crslogo from "../../img/crslogo.png";

function Header(props) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Admin/Home">
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
              data-bs-target="#adminNavbarMenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="adminNavbarMenu" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Admin/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Admin/ManageUsers">
                    Manage Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Admin/Notifications">
                    Notifications
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    @
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <NavLink className="dropdown-item" to="/Admin/Profile">
                      Edit Profile
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/Admin/ChangePassword"
                    >
                      Change Password
                    </NavLink>
                    <div class="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/">
                      Logout @
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
