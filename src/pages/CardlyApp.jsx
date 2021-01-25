import React, { Component } from 'react';
import { loadBoards, removeBoard } from './../store/actions/boardActions.js';
import { connect } from 'react-redux';
import { BoardPreview } from './../cmps/BoardPreview';
import { AddBoard } from '../cmps/AddBoard.jsx';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

export class _CardlyApp extends Component {
  state = {
    isAddBoardShow: false,
  };

  componentDidMount() {
    this.loadBoards();
  }

  loadBoards = () => {
    this.props.loadBoards();
  };

  onShowAddBoardSection = () => {
    this.setState({ isAddBoardShow: true });
  };

  onCloseAddBoardSection = () => {
    this.setState({ isAddBoardShow: false });
  };

  onRemove = (boardId) => {
    this.props.removeBoard(boardId);
  };

  render() {
    const { boards } = this.props;
    const { isAddBoardShow } = this.state;
    if (!boards) return <h1>Loading...!!</h1>;
    return (
      <section className="app-wrapper flex column justify-center align-center">
        <header className="app-header">
          <h1 className="boards-title">Boards</h1>
        </header>
        <div className="template-wrapper">
          {boards.map((board) => {
            return (
              <BoardPreview
                onRemove={this.onRemove}
                key={board._id}
                board={board}
              />
            );
          })}
          <div
            className="board-preview-card add-board"
            onClick={this.onShowAddBoardSection}
          >
            <AddOutlinedIcon />
          </div>
        </div>
        <div className="board-preview">
          {/* <button className="cardly-btn">
            <span>Clone Board</span>
          </button> */}

          {isAddBoardShow && (
            <AddBoard
              onCloseAddBoardSection={this.onCloseAddBoardSection}
            ></AddBoard>
          )}
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
  removeBoard,
};

export const CardlyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardlyApp);
