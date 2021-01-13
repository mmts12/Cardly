import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class BoardPreview extends Component {
  render() {
    const { board } = this.props;
    return (
      <div>
        <Link to={`./cardly/${board._id}`}>
          <div className="board-preview-card">
            <h2>{board.title}</h2>
          </div>
        </Link>
      </div>
    );
  }
}
