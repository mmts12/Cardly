import React, { Component } from 'react';
import { StackList } from './../cmps/StackList';
import { setSelectedBoard, updateBoard } from '../store/actions/boardActions';
import { connect } from 'react-redux';
import { AddStack } from '../cmps/AddStack';
import { StatusBar } from '../cmps/StatusBar';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import { socketService } from '../services/misc/socketService';
import { boardService } from './../services/boardService';

export class _Board extends Component {
  state = {
    isAddStack: false,
  };

  componentDidMount() {
    this.loadBoard();
    socketService.setup(); //on the road
    socketService.emit('join board', this.props.match.params.id);
    socketService.on('update board', this.handleUpdateBoard);
  }

  componentWillUnmount() {
    socketService.terminate();
  }

  handleUpdateBoard = (board) => {
    this.props.updateBoard(board);
  };

  loadBoard() {
    const boardId = this.props.match.params.id;
    this.props.setSelectedBoard(boardId);
  }

  onAddSection = () => {
    this.setState({ isAddStack: true });
  };

  onCloseAddSection = () => {
    this.setState({ isAddStack: false });
  };

  onAddNewStack = (stack) => {
    const { selectedBoard } = this.props;
    const board = boardService.saveNewStack(stack, selectedBoard);
    this.props.updateBoard(board);
    socketService.emit('update board', board);
    this.setState({ isAddStack: false });
  };

  render() {
    const { selectedBoard } = this.props;
    let style = { backgroundColor: 'white' };
    if (!selectedBoard) return <CircularProgress />;
    if (selectedBoard.style) {
      const bgc = selectedBoard.style.bgc;
      style = bgc.startsWith('#')
        ? { backgroundColor: bgc }
        : { backgroundImage: `url(${bgc})` };
    }
    return (
      <section className="board-container" style={style}>
        <StatusBar />

        <div className="board-inner mt flex column">
          <div className="stack-container flex ">
            {selectedBoard && <StackList board={selectedBoard} />}
            <div className="add-new-stack">
              <button
                className="board-open-modal-btn"
                onClick={this.onAddSection}
              >
                <span className="board-icon">
                  <AddIcon></AddIcon>
                </span>
                <span className="btn1-span">Add another list</span>
              </button>
              {this.state.isAddStack && (
                <AddStack
                  addNewStack={this.onAddNewStack}
                  closeAddSection={this.onCloseAddSection}
                />
              )}
            </div>
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
  updateBoard,
};

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board);
