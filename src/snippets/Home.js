import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import crslogo from "../img/crslogo.png";

function Home(props) {
  return (
    <>
      <div id="homeBackgroundImage" className="container-fluid">
        <div className="row">
          <div id="homeLeftCol" className="col-xs-12 col-md-4 text-center">
            <img src={crslogo} alt="Campus Recruitment System" width="50%" />
          </div>
          <div id="homeRightCol" className="col-xs-12 col-md-8">
            <div>
              <h1 className="text-center">Campus Recruitment System</h1>
              <p className="textJustify">
                <span style={{color: "yellow", backgroundColor: "#000"}}>Note: Please append these URL slugs to visit the relevant user dashboard. 
                  <ul>
                  <li><code>/Admin/Home</code> to visit Admin Dashboard</li>
                  <li><code>/PlacementCoordinator/Home</code> to visit Placement Coordinator Dashboard</li>
                  <li><code>/Company/Home</code> to visit Company Dashboard</li>
                  <li><code>/Student/Home</code> to visit Student Dashboard</li>
                  </ul>
                </span>
                Campus Recruitment System is a management system developed to
                streamline application tracking in Jaypee University of
                Engineering and Technology. The project is developed by Aayush
                Srivastava. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Minima eum praesentium vero in perspiciatis
                ipsam debitis rem. Iure eius placeat eaque quidem illo nisi
                quos? Fuga nisi libero dolorum sed. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Commodi nam, culpa recusandae,
                perspiciatis eaque, porro nihil repellat cum repudiandae maiores
                vero tempora a minima!
              </p>
            </div>
            <div id="homeAuthButtons">
              <Link
                to={{
                  pathname: "/Authenticator",
                  state: { authMode: "login" },
                }}
              >
                <button className="btn btn-warning btn-block">Log In</button>
              </Link>
              <Link
                to={{
                  pathname: "/Authenticator",
                  state: { authMode: "signup" },
                }}
              >
                <button className="btn btn-outline-warning btn-block">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
