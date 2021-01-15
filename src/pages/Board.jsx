import React, { Component } from 'react';
import { StackList } from './../cmps/StackList';
import { setSelectedBoard } from '../store/actions/boardActions';
import { addStack } from '../store/actions/stackActions';
import { connect } from 'react-redux';
import { AddStack } from '../cmps/AddStack';

export class _Board extends Component {
  state = {
    isAddStack: false,
  };
  componentDidMount() {
    this.loadBoard();
  }

  componentDidUpdate(prevProps, prevState) {
    const x = JSON.stringify(prevProps.boards);
    const y = JSON.stringify(this.props.boards);
    if (x !== y) {
      this.loadBoard();
    }
  }

  loadBoard = () => {
    const boardId = this.props.match.params.id;
    this._getBoardById(boardId).then((res) => {
      this.props.setSelectedBoard(res);
    });
  };

  _getBoardById = (boardId) => {
    const { boards } = this.props;
    const board = boards.find((board) => board._id === boardId);
    return Promise.resolve(board);
  };

  onAddSection = () => {
    this.setState({ isAddStack: true });
  };

  onCloseAddSection = () => {
    this.setState({ isAddStack: false });
  };

  onAddNewStack = (stack) => {
    const boardId = this.props.match.params.id;
    this.props
      .addStack(stack, boardId)
      .then(() => this.setState({ isAddStack: false }));
  };

  render() {
    const { selectedBoard } = this.props;
    const boardId = this.props.match.params.id;
    return (
      <div>
        {/* <StatusBar /> */}
        <h2>Board</h2>
        {selectedBoard && <StackList boardId={boardId} board={selectedBoard} />}
        <div className="add-new-stack">
          <button onClick={this.onAddSection}>+ Add New Stack</button>
          {this.state.isAddStack && (
            <AddStack
              addNewStack={this.onAddNewStack}
              closeAddSection={this.onCloseAddSection}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBoard: state.boardModule.selectedBoard,
    boards: state.boardModule.boards,
  };
};

const mapDispatchToProps = {
  setSelectedBoard,
  addStack,
};

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board);
