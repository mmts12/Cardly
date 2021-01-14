import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsIcon from '@material-ui/icons/Notifications';

export class Header extends Component {

  state = {

  }

  onOpenSearch() {
    const searchClass = ('not-searched') ? 'searching-now' : 'not-searched'
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-left">
          <Link to="/" >
            <button className="btn1">
              <span className="btn1-span">
                <span className="header-icon">
                <HomeIcon></HomeIcon>
                </span>
              </span>
            </button>
          </Link>
          <Link to="/Cardly">
            <button className="btn1">
              <span className="header-icon">
                <DashboardIcon></DashboardIcon>
              </span>
              <span className="header-icon-word">Boards</span>
            </button>
          </Link>
          <form className="header-input flex">
            <label hidden>Search Bar</label>
            <input type="text" />
            <div className={this.searchClass} onClick={this.onOpenSearch}>
              <div className="header-icon">
                <SearchIcon></SearchIcon>
              </div>
            </div>
          </form>
        </div>
        <button className="logo-wrapper">
          <Link to="/">
            <span className="logo">Cardly</span>
          </Link>
        </button>
        <div className="header-right">
          <button className="btn1">
            <div className="btn1-span">
              <span className="header-icon">
              <AddIcon></AddIcon>
              </span>
            </div>
          </button>
          <button className="btn1">
            <div className="btn1-span">
            <span className="header-icon">
              <InfoIcon></InfoIcon>
              </span>
            </div>
          </button>
          <button className="btn1">
            <div className="btn1-span">
            <span className="header-icon">
              <NotificationsIcon></NotificationsIcon>
              </span>
            </div>
          </button>
          <button className="header-username">AS</button>
        </div>
      </div>
    );
  }
}
