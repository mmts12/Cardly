import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class BoardPreview extends Component {
  render() {
    const { board } = this.props;
    // const style = {}
    return (
      <div className="board-preview">
        <div
          className="board-preview-image"
          style={{ backgroundImage: `url(${board.createdBy.imgUrl})` }}
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
