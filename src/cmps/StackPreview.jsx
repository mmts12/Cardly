import React, { Component } from 'react';
import { CardList } from './CardList';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { removeStack } from '../store/actions/stackActions.js';
import { setSelectedBoard } from '../store/actions/boardActions';

export class _StackPreview extends Component {
  onRemoveStack = () => {
    const { stack, selectedBoard, removeStack } = this.props;
    removeStack(stack.id, selectedBoard._id, selectedBoard);
  };

  componentDidUpdate() {
    this.loadBoard();
  }

  loadBoard = () => {
    const { selectedBoard } = this.props;
    this.props.setSelectedBoard(selectedBoard);
  };

  render() {
    const { stack } = this.props;
    return (
      <div className="stack-preview-card card-list">
        <h3 className="stack-title">
          {stack.title}
          <EditIcon className="stack-preview-edit-icon"></EditIcon>
          <div onClick={this.onRemoveStack}>
            <DeleteIcon className="stack-preview-delete-icon"></DeleteIcon>
          </div>
        </h3>
        <CardList cards={stack.cards} />
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
};

export const StackPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StackPreview);
