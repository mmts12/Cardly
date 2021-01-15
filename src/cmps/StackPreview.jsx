import React, { Component } from 'react';
import { CardList } from './CardList';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import {
  removeStack,
  saveStack,
  addCard,
} from '../store/actions/stackActions.js';
import { setSelectedBoard } from '../store/actions/boardActions';
import { EditStack } from './EditStack.jsx';
import AddIcon from '@material-ui/icons/Add';
import { AddCard } from './AddCard';

export class _StackPreview extends Component {
  state = {
    isEditShow: false,
    isAddShow: false,
  };

  onRemoveStack = () => {
    const { stack, selectedBoard, removeStack } = this.props;
    removeStack(stack.id, selectedBoard._id, selectedBoard);
  };

  onEdit = () => {
    this.setState({ isEditShow: true });
  };

  onSaveStack = (stack) => {
    const { selectedBoard } = this.props;
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
    console.log(cardToadd);
    const { stack, selectedBoard } = this.props;
    this.onCloseAddSection();
    this.props.addCard(cardToadd, stack, selectedBoard);
  };

  render() {
    const { stack } = this.props;
    return (
      <div className="stack-preview-card card-list">
        <div className="stack-title flex">
          <h4>{stack.title}</h4>
          {this.state.isEditShow ? (
            <EditStack saveStack={this.onSaveStack} stack={stack} />
          ) : (
            <div onClick={this.onEdit}>
              <EditIcon className="stack-preview-edit-icon"></EditIcon>
            </div>
          )}
          <div onClick={this.onRemoveStack}>
            <DeleteIcon className="stack-preview-delete-icon"></DeleteIcon>
          </div>
        </div>
        <CardList cards={stack.cards} />
        {this.state.isAddShow ? (
          <AddCard
            addNewCard={this.onAddNewCard}
            closeAddSection={this.onCloseAddSection}
          />
        ) : (
          <div onClick={this.onAddCard} className="add-new-card flex">
            <AddIcon></AddIcon>
            <span>Add Another Card</span>
          </div>
        )}
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
  removeStack,
  setSelectedBoard,
  saveStack,
  addCard,
};

export const StackPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StackPreview);
