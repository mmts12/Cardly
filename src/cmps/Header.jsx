import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(element, document.body)

export class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <Link className="header-btn">Home</Link>
        <Link className="header-btn">Boards</Link>
        <input className="header-input" type="text"/>
        <Link className="logo">Cardly</Link>
        <Link>Username</Link>
      </div>
    )
  }
}
