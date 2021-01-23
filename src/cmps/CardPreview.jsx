import React, { Component } from 'react';
import { CardDetails } from './CardDetails';
import { CardLabels } from './cardDetailsCmps/cardDetailsBodyCmps/CardLabels.jsx';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeCard, saveCard } from '../store/actions/cardActions.js';
import { connect } from 'react-redux';
import { EditCard } from './EditCard';
import { Draggable } from 'react-beautiful-dnd';
import { MembersAvatar } from '../cmps/cardDetailsCmps/cardDetailsBodyCmps/MembersAvatar.jsx';
import SubjectIcon from '@material-ui/icons/Subject';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { utilService } from './../services/misc/utilService';

export class _CardPreview extends Component {
  state = {
    isCardDetailsSelected: false,
    isEditCardModalShow: false,
    card: {},
    labels: [],
  };

  componentDidMount() {
    const { card } = this.props;
    const { labels } = this.props.card;
    this.setState({ card, labels });
  }

  onShowCardDetails = () => {
    this.props.disableStackDrag();
    if (!this.state.isEditCardModalShow)
      this.setState({ isCardDetailsSelected: true });
  };

  closeModal = (ev) => {
    this.props.allowStackDrag();
    ev.stopPropagation();
    this.setState({ isCardDetailsSelected: false });
  };

  onRemoveCard = (cardId) => {
    const { selectedBoard, stack } = this.props;
    this.props.removeCard(cardId, stack, selectedBoard);
  };

  onEditCard = (ev) => {
    ev.stopPropagation();
    this.setState({ isEditCardModalShow: true });
  };

  onSaveEditedCard = (card) => {
    const { selectedBoard, stack } = this.props;
    this.props.saveCard(card, stack, selectedBoard);
    this.setState({ isEditCardModalShow: false });
  };

  render() {
    const { card, stack, index } = this.props;
    const todosSummary = utilService.calcDoneTodos(card);
    const displayedDate = utilService.formatTime(card);
    const { coverColor, labels } = this.props.card;
    const { isCardDetailsSelected, isEditCardModalShow } = this.state;
    if (!card || !stack) return <h1>loading..</h1>;
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
              {
                card.imgUrl ? (
                  // {coverColor !== '' && (
                  <img src={card.imgUrl} alt="" />
                ) : (
                  <div
                    className="card-preview-color"
                    style={{ background: `${coverColor}` }}
                  ></div>
                )
                // )}
              }
              {labels.length !== 0 && <CardLabels labels={labels} />}

              <div
                onClick={this.onShowCardDetails}
                className="card-preview-line flex space-between"
              >
                {!isEditCardModalShow ? (
                  <div className="card-preview-icons  ">
                    <div>{card.title}</div>
                    <div className="card-preview-summary-icons">
                      {card.desc && (
                        <div className="icon-preview">
                          <SubjectIcon className="icons" />
                        </div>
                      )}
                      {todosSummary.length !== 0 && (
                        <div className="icon-preview">
                          <PlaylistAddCheckIcon className="icons" />
                          {todosSummary.done}/{todosSummary.length}
                        </div>
                      )}
                      {card.dueDate && (
                        <div className="icon-preview">
                          <ScheduleIcon className="icons" /> {displayedDate}
                        </div>
                      )}
                    </div>
                    <div className="icons-container flex">
                      <div onClick={this.onEditCard}>
                        <span>
                          <EditIcon className="card-preview-edit-icon"></EditIcon>
                        </span>
                      </div>
                      <div onClick={() => this.onRemoveCard(card.id)}>
                        <span>
                          <DeleteIcon className="card-preview-edit-icon"></DeleteIcon>
                        </span>
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
              {card.members.length !== 0 && (
                <MembersAvatar users={card.members} />
              )}
            </div>
          )}
        </Draggable>
        {isCardDetailsSelected && (
          <CardDetails
            stack={stack}
            card={card}
            onCloseModal={this.closeModal}
          />
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
