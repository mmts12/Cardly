import React, { Component } from 'react';
import { StatusBar } from './../cmps/StatusBar';
import { StackList } from './../cmps/StackList';
import { boardService } from '../services/boardService';

export class Board extends Component {
  componentDidMount() {
    this.loadBoard();
  }
  loadBoard = () => {
    console.log(this.props.match.params.id);
    const boardId = this.props.match.params.id;
    const board = boardService.getBoardById(boardId);
  };
  render() {
    // const {board} = this.props
    return (
      <div>
        <StatusBar />
        <StackList />
        <h2>Board</h2>
      </div>
    );
  }
}
