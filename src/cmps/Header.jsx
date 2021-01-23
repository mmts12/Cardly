import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from 'react-redux';
import { logout } from './../store/actions/userActions.js';

export class _Header extends Component {
  state = {};

  // onOpenSearch() {
  //   const searchClass = 'not-searched' ? 'searching-now' : 'not-searched';
  // }

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
          {/* <form className="header-input flex">
            <label hidden>Search Bar</label>
            <input type="text" />
            <div className={this.searchClass} onClick={this.onOpenSearch}>
              <div className="header-icon">
                <SearchIcon></SearchIcon>
              </div>
            </div>
          </form> */}
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
                <NotificationsIcon></NotificationsIcon>
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
                <span className="header-icon-word">Login</span>
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
