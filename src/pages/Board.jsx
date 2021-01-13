import React, { Component } from 'react';
import { StatusBar } from './../cmps/StatusBar';
import { StackList } from './../cmps/StackList';

export class Board extends Component {
  componentDidMount() {}
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
