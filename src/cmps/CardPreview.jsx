import React, { Component } from 'react';
import { CardDetails } from './CardDetails';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeCard, saveCard } from '../store/actions/cardActions.js';
import { connect } from 'react-redux';
import { EditCard } from './EditCard';
import { Draggable } from 'react-beautiful-dnd';

export class _CardPreview extends Component {
  state = {
    isCardDetailsSelected: false,
    isEditCardModalShow: false,
  };

  onShowCardDetails = () => {
    this.setState({ isCardDetailsSelected: true });
  };

  closeModal = (ev) => {
    ev.stopPropagation();
    this.setState({ isCardDetailsSelected: false });
  };

  onRemoveCard = (cardId) => {
    const { selectedBoard, stack } = this.props;
    this.props.removeCard(cardId, stack, selectedBoard);
  };

  onEditCard = () => {
    this.setState({ isEditCardModalShow: true });
  };

  onSaveEditedCard = (card) => {
    const { selectedBoard, stack } = this.props;
    this.props.saveCard(card, stack, selectedBoard);
    this.setState({ isEditCardModalShow: false });
  };

  render() {
    const { card, stack, index } = this.props;
    const { isCardDetailsSelected, isEditCardModalShow } = this.state;
    return (
      <>
        <Draggable draggableId={card.id} index={index}>
          {(provided) => (
            <div
              className="card-preview"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <div className="card-preview-line flex space-between">
                {!isEditCardModalShow ? (
                  <div className="card-preview-icons flex">
                    <div onClick={this.onShowCardDetails}>{card.title}</div>
                    <div onClick={this.onEditCard}>
                      <EditIcon className="card-preview-edit-icon"></EditIcon>
                    </div>
                    <div onClick={() => this.onRemoveCard(card.id)}>
                      <DeleteIcon className="card-preview-edit-icon"></DeleteIcon>
                    </div>
                  </div>
                ) : (
                  <EditCard
                    saveEditedCard={this.onSaveEditedCard}
                    card={card}
                  ></EditCard>
                )}
              </div>
            </div>
          )}
        </Draggable>
        {isCardDetailsSelected && (
          <CardDetails card={card} onCloseModal={this.closeModal} />
        )}
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
  removeCard,
  saveCard,
};

export const CardPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardPreview);
