import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class BoardPreview extends Component {
  render() {
    const { board, onRemove } = this.props;
    const { bgc } = board.style;

    return (
      <div className="board-preview">
        <button onClick={() => onRemove(board._id)}>X</button>
        <div
          className="board-preview-image"
          style={
            bgc.startsWith('#')
              ? { backgroundColor: bgc }
              : { backgroundImage: `url(${bgc})` }
          }
        >
          <Link to={`./cardly/${board._id}`}>
            <div className="board-preview-card">
              <h3 className="board-preview-title">{board.title}</h3>
            </div>
          </Link>
        </div>
        {/* <div class="board-preview-description">Board Description and Members</div> */}
      </div>
    );
  }
}
