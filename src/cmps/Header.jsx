import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <Link className="header-btn">Boards</Link>
        <input className="header-input" type="text" />
        <Link className="logo">Cardly</Link>
        <Link>Username</Link>
      </div>
    )
  }
}
