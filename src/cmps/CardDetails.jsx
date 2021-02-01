import React, { Component } from 'react';
import { connect } from 'react-redux';
import { utilService } from '../services/misc/utilService.js';
import { CardSideBar } from './cardDetailsCmps/cardDetailsBodyCmps/CardSideBar.jsx';
import { CardDescription } from './cardDetailsCmps/cardDetailsBodyCmps/CardDescription.jsx';
import { CardActivity } from './cardDetailsCmps/cardDetailsBodyCmps/CardActivity.jsx';
import { CardLabels } from './cardDetailsCmps/cardDetailsBodyCmps/CardLabels.jsx';
import { CardChecklist } from './cardDetailsCmps/cardDetailsBodyCmps/CardChecklist.jsx';
import { MembersAvatar } from '../cmps/cardDetailsCmps/cardDetailsBodyCmps/MembersAvatar.jsx';
import { CardImg } from '../cmps/cardDetailsCmps/cardDetailsBodyCmps/CardImg.jsx';
import { loadUsers } from '../store/actions/userActions.js';
import { userService } from '../services/userService';
import CloseIcon from '@material-ui/icons/Close';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { updateBoard } from './../store/actions/boardActions';
import { socketService } from './../services/misc/socketService';
import { boardService } from './../services/boardService';

export class _CardDetails extends Component {
  state = {
    card: {
      comments: [],
      labels: [],
      checklists: [],
      coverColor: '',
      members: [],
      dueDate: '',
    },
    boardUsers: [],
    loggedUser: {},
  };

  componentDidMount() {
    const { card } = this.props;
    const boardUsers = this.props.selectedBoard.members;
    let loggedUser = userService.getLoggedinUser();
    if (!loggedUser) {
      loggedUser = { fullname: 'Guest' };
    }
    this.setState({ loggedUser, card, boardUsers });
  }

  onMemberAdd = (user) => {
    let { card } = this.state;
    let { loggedUser } = this.state;

    const memberIndx = card.members.findIndex(
      (member) => member._id === user._id
    );
    if (memberIndx === -1) {
      card.members.push(user);
      card.comments.unshift({
        id: utilService.makeId(),
        createdAt: Date.now(),
        txt: `${loggedUser.fullname} added ${user.fullname} to this card`,
      });
    } else {
      card.comments.unshift({
        id: utilService.makeId(),
        createdAt: Date.now(),
        txt: `${loggedUser.fullname} removed ${user.fullname} from this card`,
      });
      card.members.splice(memberIndx, 1);
    }
    this.setState({ card }, () => {
      this.onSaveCard(card);
    });
  };

  setLabelOnCard = (color) => {
    const { card } = this.state;
    let { comments } = card;
    // const { loggedUser } = this.state;
    const colorIndx = card.labels.findIndex(
      (labelColor) => labelColor === color
    );
    if (colorIndx === -1) {
      comments.unshift({
        id: utilService.makeId(),
        createdAt: Date.now(),
        txt: `${this.state.loggedUser.fullname} added card label color`,
      });
      card.labels.push(color);
    } else {
      comments.unshift({
        id: utilService.makeId(),
        createdAt: Date.now(),
        txt: `${this.state.loggedUser.fullname} removed card label color`,
      });
      card.labels.splice(colorIndx, 1);
    }
    this.setState({ card, comments }, () => {
      this.onSaveCard(card);
    });
  };

  setCardColor = (color) => {
    let { card } = this.state;
    let { comments } = card;
    if (card.coverColor === color) {
      comments.unshift({
        id: utilService.makeId(),
        createdAt: Date.now(),
        txt: `${this.state.loggedUser.fullname} removed card cover color`,
      });
      card.coverColor = '';
    } else {
      comments.unshift({
        id: utilService.makeId(),
        createdAt: Date.now(),
        txt: `${this.state.loggedUser.fullname} added card cover color`,
      });
      card.coverColor = color;
    }
    this.setState({ card, comments }, () => {
      this.onSaveCard(card);
    });
  };

  addChecklist = (checklistName) => {
    const { card } = this.state;
    let { comments } = card;
    let checkListItem = {
      id: utilService.makeId(),
      title: checklistName,
      todos: [],
      createdAt: Date.now(),
    };
    comments.unshift({
      id: utilService.makeId(),
      createdAt: Date.now(),
      txt: `${this.state.loggedUser.fullname} added checklist - ${checklistName}`,
    });
    card.checklists.push(checkListItem);
    this.setState({ card });
  };

  updateChecklist = (checklist) => {
    const { card } = this.state;
    const checklistsToAdd = card.checklists.map((currChecklist) =>
      currChecklist.id === checklist.id ? checklist : currChecklist
    );
    card.checklists = checklistsToAdd;
    this.onSaveCard(card);
  };

  onRemoveTodo = (todoId, checklists) => {
    const { card } = this.state;
    const copyChecklists = { ...checklists };
    const { todos } = copyChecklists;
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    copyChecklists.todos = filteredTodos;
    const filteredChecklists = card.checklists.map((currChecklist) =>
      currChecklist.id === copyChecklists.id ? copyChecklists : currChecklist
    );
    card.checklists = filteredChecklists;
    this.onSaveCard(card);
  };

  onClosePopUps = () => {
    // eventBus.emit('close');
  };

  deleteChecklist = (checklistId) => {
    const { card } = this.state;
    const { stack, selectedBoard } = this.props;
    let { comments } = card;
    const currChecklistIdx = card.checklists.findIndex(
      (cl) => cl.id === checklistId
    );
    const checklistName = card.checklists[currChecklistIdx].title;
    card.checklists.splice(currChecklistIdx, 1);
    comments.unshift({
      id: utilService.makeId(),
      createdAt: Date.now(),
      txt: `${this.state.loggedUser.fullname} deleted checklist - ${checklistName}`,
    });

    this.setState({ card });
    this.onSaveCard(card);
  };

  addComment = (comment) => {
    const { card } = this.state;
    card.comments.unshift({
      id: utilService.makeId(),
      createdBy: this.state.loggedUser,
      createdAt: Date.now(),
      txt: `${this.state.loggedUser.fullname} added comment - ${comment}`,
    });
    this.setState({ card });
  };

  onRemoveImage = (card) => {
    console.log('Remove IMG');
    const copyCard = { ...card };
    copyCard.imgUrl = '';
    this.onSaveCard(copyCard);
  };

  onSetDueDate = (dueDate) => {
    const { card } = this.state;
    card.dueDate = dueDate;
    this.setState({ card }, () => {
      this.onSaveCard(card);
    });
  };

  onRemoveDueDate = () => {
    const { card } = this.state;
    card.dueDate = '';
    this.setState({ card }, () => {
      this.onSaveCard(card);
    });
  };

  onSaveCard = (card) => {
    const { stack, selectedBoard } = this.props;
    const board = boardService.saveCard(card, stack, selectedBoard);
    this.props.updateBoard(board);
    socketService.emit('update board', board);
  };

  render() {
    const { card, onCloseModal, stack } = this.props;
    const { checklists } = this.state.card;
    const labels = this.state.card.labels;
    const cardMembers = this.state.card.members;
    const dueDate = utilService.formatTime(card, 'dateTime');
    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section
            onClick={this.onClosePopUps}
            className="card-details-container"
          >
            <div
              className="card-details-cover"
              style={{ background: `${this.state.card.coverColor}` }}
            >
              <CloseIcon
                className="close-cd"
                onClick={(ev) => onCloseModal(ev)}
              />
            </div>

            <div className="card-details-body">
              <div className="card-details-top">
                <h2 className="card-details-title">{card.title}</h2>
                <p className="card-details-list">
                  in list <span className="list-fake-link">{stack.title}</span>
                </p>
              </div>
              <div className="details-list-container flex">
                <div className="column-container flex column">
                  {/* CARD LABELS */}
                  {labels.length !== 0 && (
                    <CardLabels className="labels-txt" labels={labels} />
                  )}
                  {dueDate && (
                    <div>
                      <p className="details-due-date">
                        <span>
                          <ScheduleIcon />
                        </span>
                        {dueDate}
                      </p>
                    </div>
                  )}
                  {cardMembers.length !== 0 && (
                    <MembersAvatar
                      users={cardMembers}
                      className="details-members"
                    />
                  )}
                  <CardDescription onSaveCard={this.onSaveCard} card={card} />
                  {card.imgUrl && (
                    <CardImg onRemoveImage={this.onRemoveImage} card={card} />
                  )}
                  {checklists.length !== 0 && (
                    <CardChecklist
                      updateChecklist={this.updateChecklist}
                      onRemoveTodo={this.onRemoveTodo}
                      onRemove={this.deleteChecklist}
                      checklists={checklists}
                    />
                  )}
                </div>
                <div className="sidebar-wrapper flex column">
                  <CardSideBar
                    onSetDueDate={this.onSetDueDate}
                    onRemoveDueDate={this.onRemoveDueDate}
                    card={card}
                    stack={stack}
                    onMemberAdd={this.onMemberAdd}
                    boardUsers={this.state.boardUsers}
                    onCheckListSelect={this.addChecklist}
                    onCoverColorSelect={this.setCardColor}
                    onLabelColorSelect={this.setLabelOnCard}
                  />
                </div>
                <div className="column-container flex column">
                  <CardActivity card={card} onCommentAdd={this.addComment} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBoard: state.boardModule.selectedBoard,
    users: state.userModule.users,
  };
};

const mapDispatchToProps = {
  loadUsers,
  updateBoard,
};

export const CardDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardDetails);
