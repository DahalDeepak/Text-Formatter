import React from "react";
import PropTypes from "prop-types";
import "./nav.css";
export default function Navbar(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="##">
            {/* <img
              src="../favicon.ico"
              alt="LOGO"
              width="40"
              class="d-inline-block align-text-center my-2"
            /> */}
            {/* for logo */}
            {props.title}
          </a>
        </div>
      </nav>
    </div>

    // navbar from bootstrap

    // <div className="container">
    //   <div className="nav">
    //     <h1>{props.title}</h1>
    //   </div>
    // </div>
  );
}
Navbar.prototype = { title: PropTypes.string.isRequired };
// using this we can gt only string in title

Navbar.defaultProps = {
  title: "Defult title",
};
//If no value input
