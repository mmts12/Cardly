import React, { Component } from 'react';
import { CardList } from './CardList';
import { connect } from 'react-redux';
import { updateBoard, setSelectedBoard } from '../store/actions/boardActions';
import { EditStack } from './EditStack.jsx';
import AddIcon from '@material-ui/icons/Add';
import { AddCard } from './AddCard';
import { Draggable } from 'react-beautiful-dnd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { StackMenu } from './StackMenu';
import { boardService } from './../services/boardService';
import { socketService } from './../services/misc/socketService';

export class _StackPreview extends Component {
  state = {
    isEditShow: false,
    isAddShow: false,
    dragEnable: true,
    isOpenStackMenu: false,
  };

  disableStackDrag = () => {
    this.setState({ dragEnable: false });
  };
  allowStackDrag = () => {
    this.setState({ dragEnable: true });
  };

  onRemoveStack = () => {
    const { stack, selectedBoard, updateBoard } = this.props;
    const board = boardService.removeStack(
      stack.id,
      selectedBoard._id,
      selectedBoard
    );
    updateBoard(board);
    socketService.emit('update board', board);
    this.onCloseMenuModal();
  };

  onEdit = () => {
    this.setState({ isEditShow: true });
  };

  onSaveStack = (stack) => {
    const { selectedBoard } = this.props;
    const board = boardService.saveStack(stack, selectedBoard);
    this.props.updateBoard(board);
    socketService.emit('update board', board);
    this.setState({ isEditShow: false });
  };

  onAddCard = () => {
    this.setState({ isAddShow: true });
  };

  onCloseAddSection = () => {
    this.setState({ isAddShow: false });
  };

  onAddNewCard = (cardToAdd) => {
    const { stack, selectedBoard } = this.props;
    const board = boardService.addCard(cardToAdd, stack, selectedBoard);
    this.props.updateBoard(board);
    socketService.emit('update board', board);
    this.onCloseAddSection();
  };

  onDragDis = () => {
    return true;
  };

  onToogleStackMenu = () => {
    let { isOpenStackMenu } = this.state;
    isOpenStackMenu = !isOpenStackMenu;
    this.setState({ isOpenStackMenu });
  };

  onCloseMenuModal = () => {
    this.setState({ isOpenStackMenu: false });
  };

  render() {
    const { stack } = this.props;
    const { dragEnable, isOpenStackMenu } = this.state;
    return (
      <>
        <Draggable
          isDragDisabled={dragEnable === false}
          draggableId={stack.id}
          index={this.props.index}
        >
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
                  <div className="flex space-between align-center width100">
                    <h4 onClick={this.onEdit} className="stack-title-words">
                      {stack.title}
                    </h4>
                    {/* <div onClick={this.onRemoveStack} className="flex">
                      <DeleteIcon className="stack-preview-delete-icon"></DeleteIcon>
                    </div> */}
                    {isOpenStackMenu && (
                      <StackMenu
                        onRemoveStack={this.onRemoveStack}
                        onCloseMenuModal={this.onCloseMenuModal}
                      />
                    )}
                    <MoreHorizIcon
                      onClick={this.onToogleStackMenu}
                      className="stack-3dots-menu"
                    />
                  </div>
                )}
              </div>
              <CardList
                allowStackDrag={this.allowStackDrag}
                disableStackDrag={this.disableStackDrag}
                stack={stack}
                cards={stack.cards}
              />
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
      </>
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

export const StackPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StackPreview);
