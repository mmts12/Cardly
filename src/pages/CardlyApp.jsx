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
    console.log('boards is:', boards);
    if (!boards) return <h1>Loading...!!</h1>;
    return (
      <section className="app-wrapper flex column justify-center align-center">
        <header className="app-header"><h1>Boards</h1></header>
        <div className="template-wrapper">
          {boards.map((board) => {
            return <BoardPreview key={board._id} board={board} />;
          })}
          <div className="board-template" style={{ backgroundImage: "url(https://res.cloudinary.com/drak3llqt/image/upload/v1610553514/img4_ohr2cl.png)" }}>
            <div className="board-template-card">
              <h3 className="board-template-title">Night Field</h3>
            </div>
          </div>
          <div className="board-template" style={{ backgroundImage: "url(https://res.cloudinary.com/drak3llqt/image/upload/v1610553508/img3_g44phk.png)" }}>
            <div className="board-template-card">
              <h3 className="board-template-title">Forest Magic</h3>
            </div>
          </div>
        </div>
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
