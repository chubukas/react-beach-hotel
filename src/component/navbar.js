import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Blue Hotels" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              style={{ paddingLeft: 20}}
              onClick={() => this.handleToggle()}
            >
              <i className="fa fa-home nav-icon " style={{ fontSize: 35 }} />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
