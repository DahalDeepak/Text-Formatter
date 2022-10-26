import React from "react";
import PropTypes from "prop-types";
import "./nav.css";
export default function Navbar(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="##">
            {props.title}
          </a>
        </div>
      </nav>
    </div>
  );
}
Navbar.prototype = { title: PropTypes.string.isRequired };
// using this we can gt only string in title

Navbar.defaultProps = {
  title: "Defult title",
};
//If no value input
