import React, { Component } from 'react';
import { CardList } from './CardList';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { removeStack, saveStack } from '../store/actions/stackActions.js';
import { addCard } from '../store/actions/cardActions';
import { updateBoard, setSelectedBoard } from '../store/actions/boardActions';
import { EditStack } from './EditStack.jsx';
import AddIcon from '@material-ui/icons/Add';
import { AddCard } from './AddCard';
// import { boardService } from './../services/boardService';
import { Draggable } from 'react-beautiful-dnd';
import { boardService } from './../services/boardService';
import { socketService } from '../services/misc/socketService';

export class _StackPreview extends Component {
  state = {
    isEditShow: false,
    isAddShow: false,
  };
  // componentDidMount() {
  // const savedMsgs = socketService.getMsgsFromStorage() || [];
  //   this.setState({ msgs: savedMsgs });
  // socketService.setup()
  // socketService.on('board updateBoard', this.onEmitSocket)
  // }
  // componentWillUnmount() {}

  // onEmitSocket = () => {
  //   console.log('RUMPUS')
  // }

  onRemoveStack = () => {
    const { stack, selectedBoard, removeStack } = this.props;
    removeStack(stack.id, selectedBoard._id, selectedBoard);
  };

  onEdit = () => {
    this.setState({ isEditShow: true });
  };

  onSaveStack = (stack) => {
    const { selectedBoard } = this.props;
    console.log('selectedBoard is:', this.props.selectedBoard);
    this.props.saveStack(stack, selectedBoard);
    this.setState({ isEditShow: false });
  };

  // componentDidUpdate() {
  //   this.loadBoard();
  // }

  // loadBoard = () => {
  //   const { selectedBoard } = this.props;
  //   this.props.setSelectedBoard(selectedBoard);
  // };

  onAddCard = () => {
    this.setState({ isAddShow: true });
  };

  onCloseAddSection = () => {
    this.setState({ isAddShow: false });
  };

  onAddNewCard = (cardToadd) => {
    const { stack, selectedBoard } = this.props;
    this.onCloseAddSection();
    // const board = boardService.addCard(cardToadd, stack, selectedBoard);
    // console.log(board);
    this.props.addCard(cardToadd, stack, selectedBoard);
  };

  render() {
    const { stack } = this.props;
    return (
      <Draggable draggableId={stack.id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className="stack-preview-card card-list"
          >
            <div className="stack-title flex">
              {this.state.isEditShow ? (
                <EditStack
                  className="stack-preview-edit flex"
                  saveStack={this.onSaveStack}
                  stack={stack}
                />
              ) : (
                <div className="flex space-between align-center">
                  <h4 onClick={this.onEdit} className="stack-title-words">
                    {stack.title}
                  </h4>
                  <div onClick={this.onRemoveStack} className="flex">
                    <DeleteIcon className="stack-preview-delete-icon"></DeleteIcon>
                  </div>
                </div>
              )}
            </div>
            <CardList stack={stack} cards={stack.cards} />
            {this.state.isAddShow ? (
              <AddCard
                addNewCard={this.onAddNewCard}
                closeAddSection={this.onCloseAddSection}
              />
            ) : (
              <div
                onClick={this.onAddCard}
                className="add-new-card flex align-center"
              >
                <div className="add-icon flex justify-center align-center">
                  <AddIcon></AddIcon>
                </div>
                <span className="add-text flex justify-center align-center">
                  Add Another Card
                </span>
              </div>
            )}
          </div>
        )}
      </Draggable>
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
  removeStack,
  setSelectedBoard,
  saveStack,
  addCard,
  updateBoard,
};

export const StackPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StackPreview);
