import React, { Component } from 'react';
import { StatusBar } from './../cmps/StatusBar';
import { StackList } from './../cmps/StackList';
import { boardService } from '../services/boardService';
import { setSelectedBoard } from '../store/actions/boardActions';
import { connect } from 'react-redux';
import { AddStack } from '../cmps/AddStack';

export class _Board extends Component {
  state = {
    isAddStack: false,
  };
  componentDidMount() {
    this.loadBoard();
  }
  loadBoard = () => {
    // console.log(this.props.match.params.id);
    const boardId = this.props.match.params.id;
    const board = boardService.getBoardById(boardId);
    this.props.setSelectedBoard(board);
  };

  onAddSection = () => {};

  render() {
    const { selectedBoard } = this.props;
    console.log(selectedBoard);
    return (
      <div>
        <StatusBar />
        <h2>Board</h2>
        <StackList board={selectedBoard} />
        <div className="add-new-stack">
          <button onClick={this.onAddSection}>+ Add New Stack</button>
          {this.state.isAddStack && <AddStack />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBoard: state.boardModule.selectedBoard,
  };
};

const mapDispatchToProps = {
  setSelectedBoard,
};

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board);
