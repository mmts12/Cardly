import React, { Component } from 'react';
import { loadBoards } from './../store/actions/boardActions.js';
import { connect } from 'react-redux';
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
      <section className="app-wrapper flex column justify-center align-center">
        {boards.map((board) => {
          return <BoardPreview key={board._id} board={board} />;
        })}
        <div className="app-btn-container flex">
        <button className="btn2"><span>Clone Board</span></button>
        <button className="btn2"><span>Add Board</span></button>
        </div>
      </section>
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
