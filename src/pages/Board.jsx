import React, { Component } from 'react';
import { StatusBar } from './../cmps/StatusBar';
import { StackList } from './../cmps/StackList';
import { boardService } from '../services/boardService';
import { setSelectedBoard } from '../store/actions/boardActions';
import { addStack } from '../store/actions/stackActions';
import { connect } from 'react-redux';
import { AddStack } from '../cmps/AddStack';
import AddIcon from '@material-ui/icons/Add';

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
    this.props.addStack(stack, boardId);
    const { selectedBoard } = this.props;
  };

  render() {
    const { selectedBoard } = this.props;
    return (
      <section className="board-container flex column align-center">
        {/* <StatusBar /> */}
        <h2>Board</h2>
        <div className="stack-container flex">
          {selectedBoard && <StackList board={selectedBoard} />}
          <div className="add-new-stack">
            <button  onClick={this.onAddSection}><span className="board-icon"><AddIcon></AddIcon></span><span className="btn1-span">Add another list</span></button>
            {this.state.isAddStack && (
              <AddStack
                addNewStack={this.onAddNewStack}
                closeAddSection={this.onCloseAddSection}
              />
            )}
          </div>
        </div>
      </section>
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
