import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <FontAwesomeIcon icon={['fas','home']} />
        <Link className="header-btn">Boards</Link>
        <input className="header-input" type="text"/>
        <Link className="logo">Cardly</Link>
        <Link>Username</Link>
      </div>
    )
  }
}
