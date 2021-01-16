import React, { Component } from 'react';
import { CardDetails } from './CardDetails';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeCard } from '../store/actions/cardActions.js';
import { connect } from 'react-redux';
import { EditCard } from './EditCard';

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
    console.log(card);
  };

  render() {
    const { card, stack } = this.props;
    const { isCardDetailsSelected, isEditCardModalShow } = this.state;
    return (
      <div className="card-preview">
        <div className="card-preview-line flex space-between">
          <div onClick={this.onShowCardDetails}>{card.title}</div>
          {!isEditCardModalShow ? (
            <div className="card-preview-icons flex">
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
        {isCardDetailsSelected && (
          <CardDetails card={card} onCloseModal={this.closeModal} />
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
  removeCard,
};

export const CardPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardPreview);
