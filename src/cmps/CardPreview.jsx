import React, { Component } from 'react';
import { CardDetails } from './CardDetails';
import { CardLabels } from './cardDetailsCmps/cardDetailsBodyCmps/CardLabels.jsx';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { EditCard } from './EditCard';
import { Draggable } from 'react-beautiful-dnd';
import { MembersAvatar } from '../cmps/cardDetailsCmps/cardDetailsBodyCmps/MembersAvatar.jsx';
import SubjectIcon from '@material-ui/icons/Subject';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { utilService } from './../services/misc/utilService';
import { boardService } from './../services/boardService';
import { updateBoard } from './../store/actions/boardActions';
import { socketService } from './../services/misc/socketService';

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
    const board = boardService.removeCard(cardId, stack, selectedBoard);
    this.onUpdateBoard(board);
  };

  onEditCardShow = (ev) => {
    ev.stopPropagation();
    this.setState({ isEditCardModalShow: true });
  };

  onSaveEditedCard = (card) => {
    const { selectedBoard, stack } = this.props;
    const board = boardService.saveCard(card, stack, selectedBoard);
    this.onUpdateBoard(board);
    this.setState({ isEditCardModalShow: false });
  };

  onUpdateBoard = (board) => {
    this.props.updateBoard(board);
    socketService.emit('update board', board);
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
              onClick={this.onShowCardDetails}
              className="card-preview"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {card.imgUrl ? (
                <img src={card.imgUrl} alt="" />
              ) : (
                <div
                  className="card-preview-color"
                  style={{ background: `${coverColor}` }}
                ></div>
              )}
              {labels.length !== 0 && <CardLabels labels={labels} />}

              <div className="card-preview-line flex space-between">
                {!isEditCardModalShow ? (
                  <div className="card-preview-icons">
                    <div>{card.title}</div>

                    <div className="card-preview-bottom flex space-between">
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
                        <div onClick={this.onEditCardShow}>
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
                  </div>
                ) : (
                  <EditCard
                    saveEditedCard={this.onSaveEditedCard}
                    card={card}
                  ></EditCard>
                )}
              </div>
              <div className="preview-members flex">
                {card.members.length !== 0 && (
                  <MembersAvatar users={card.members} />
                )}
              </div>
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
  updateBoard,
};

export const CardPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardPreview);
