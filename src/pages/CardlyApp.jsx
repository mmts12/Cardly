import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class CardlyApp extends Component {
  render() {
    return (
      <div>
        <button>Clone Board</button>
        <Link>
          <div>Boaard1</div>
        </Link>
      </div>
    );
  }
}
