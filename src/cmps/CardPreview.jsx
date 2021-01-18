import React, { Component } from 'react';
import { CardDetails } from './CardDetails';
import { CardLabels } from "./cardDetailsCmps/cardDetailsBodyCmps/CardLabels.jsx"
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
    card: {},
    labels: [],
  };
  componentDidMount() {
    const { card } = this.props
    this.setState({ card })
    this.setState(this.state.labels = this.props.card.labels)

  }

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
    const { labels } = this.state
    const { coverColor } = this.state.card
    const { isCardDetailsSelected, isEditCardModalShow } = this.state;
    if (!card || !stack) return <h1>loading..</h1>
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
              <div className="card-preview-color" style={{ background: `${coverColor}` }}></div>
              {labels.length !== 0 && <CardLabels labels={labels} />}
              <div className="card-preview-line flex space-between">
                {!isEditCardModalShow ? (
                  <div className="card-preview-icons flex space-between">
                    <div onClick={this.onShowCardDetails}>{card.title}</div>
                    <div className="icons-container flex">
                      <div onClick={this.onEditCard}>
                        <span><EditIcon className="card-preview-edit-icon"></EditIcon></span>
                      </div>
                      <div onClick={() => this.onRemoveCard(card.id)}>
                        <span><DeleteIcon className="card-preview-edit-icon"></DeleteIcon></span>
                      </div>
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
          <CardDetails stack={stack} card={card} onCloseModal={this.closeModal} />
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
