import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';


export class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-left">
          <Link to="/" >
            <button className="header-btn">
              <span className="header-home">
                <HomeIcon></HomeIcon>
              </span>
            </button>
          </Link>
          <Link to="/Cardly">
            <button className="header-btn">
              <span className="header-icon">
                <DashboardIcon></DashboardIcon>
              </span>
              <span className="header-icon-word">Boards</span>
            </button>
          </Link>
          <input className="header-input" type="text" />
        </div>
        <div className="header-left-space"></div>
        <Link to="/">
          <button className="logo-wrapper">
            <span className="logo">Cardly</span>
          </button>
        </Link>
        <div className="header-right">
          <button className="header-username">AS</button>
        </div>
      </div>
    );
  }
}
