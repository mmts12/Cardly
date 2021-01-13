import React, { Component } from 'react';

import { loadBoards } from './../store/actions/boardActions.js';
import { connect } from 'react-redux';
import { StackList } from '../cmps/StackList.jsx';
import { BoardPreview } from './../cmps/BoardPreview';
export class _CardlyApp extends Component {
  componentDidMount() {
    this.loadBoards();
  }

  loadBoards = () => {
    this.props.loadBoards();
  };

  render() {
    const { boards } = this.props;
    if (!boards) return <h1>Loading ...</h1>;
    return (
      <div>
        {boards.map((board) => {
          return <BoardPreview key={board._id} board={board} />;
        })}
        <button>Clone Board</button>
        <button>Add Board</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boardModule.boards,
  };
};

const mapDispatchToProps = {
  loadBoards,
};

export const CardlyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardlyApp);
