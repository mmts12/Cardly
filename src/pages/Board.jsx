import React, { Component } from 'react';
import { StatusBar } from './../cmps/StatusBar';
import { StackList } from './../cmps/StackList';
import { boardService } from '../services/boardService';
import { setSelectedBoard } from '../store/actions/boardActions';
import { connect } from 'react-redux';

export class _Board extends Component {
  componentDidMount() {
    this.loadBoard();
  }
  loadBoard = () => {
    // console.log(this.props.match.params.id);
    const boardId = this.props.match.params.id;
    const board = boardService.getBoardById(boardId);
    this.props.setSelectedBoard(board);
  };
  render() {
    const { selectedBoard } = this.props;
    console.log(selectedBoard);
    return (
      <div>
        <StatusBar />
        <StackList board={selectedBoard} />
        <h2>Board</h2>
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
