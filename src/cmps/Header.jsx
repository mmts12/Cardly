import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from 'react-redux';
import { logout } from './../store/actions/userActions.js';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

export class _Header extends Component {
  state = {};

  render() {
    const { loggedInUser } = this.props;
    let initials = 'G';
    if (loggedInUser) {
      initials =
        loggedInUser.fullname.substring(0, 1) +
        loggedInUser.fullname.charAt(loggedInUser.fullname.indexOf(' ') + 1);
    }
    return (
      <div className="header-wrapper">
        <div className="header-left">
          <Link to="/">
            <button className="btn1">
              <span className="btn1-span">
                <span className="header-icon">
                  <HomeOutlinedIcon></HomeOutlinedIcon>
                </span>
              </span>
            </button>
          </Link>
          <Link to="/Cardly">
            <button className="btn1">
              <span className="header-icon">
                <DashboardOutlinedIcon></DashboardOutlinedIcon>
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
                <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
              </span>
            </div>
          </button>

          {loggedInUser ? (
            <div className="flex">
              {/* Welcome {loggedInUser.fullname} */}
              <Link to="/">
                <button className="btn1" onClick={this.props.logout}>
                  {' '}
                  <span className="header-icon-word">Logout</span>
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn1">
                <span className="header-login">Login</span>
              </button>
            </Link>
          )}
          <div className="header-avatar">
            {' '}
            <button className="header-username pointer">{initials}</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  };
};
const mapDispatchToProps = {
  logout,
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);
