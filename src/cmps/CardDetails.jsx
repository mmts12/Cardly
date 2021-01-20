import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventBus } from '../services/eventBusService.js'
import { utilService } from '../services/misc/utilService.js';
import { CardSideBar } from './cardDetailsCmps/cardDetailsBodyCmps/CardSideBar.jsx';
import { CardDescription } from './cardDetailsCmps/cardDetailsBodyCmps/CardDescription.jsx';
import { CardActivity } from './cardDetailsCmps/cardDetailsBodyCmps/CardActivity.jsx';
import { CardLabels } from './cardDetailsCmps/cardDetailsBodyCmps/CardLabels.jsx';
import { CardChecklist } from './cardDetailsCmps/cardDetailsBodyCmps/CardChecklist.jsx';
import { MembersAvatar } from '../cmps/cardDetailsCmps/cardDetailsBodyCmps/MembersAvatar.jsx';
import { saveCard } from '../store/actions/cardActions.js';
import { loadUsers } from '../store/actions/userActions.js'
import { userService } from '../services/userService';


export class _CardDetails extends Component {
  state = {

    card: {
      comments: [],
      labels: [],
      checklists: [],
      coverColor: '',
      members: [],
    },
    boardUsers: [],
    loggedUser: {}
  };

  componentDidMount() {
    const { card } = this.props;
    const boardUsers = this.props.selectedBoard.members;
    let loggedUser = userService.getLoggedinUser();
    if (!loggedUser) {
      loggedUser = { fullname: 'Guest' }
      console.log('loggedUser is:', loggedUser);
    }
    this.setState({ loggedUser })
    this.setState({ card });
    this.setState({ boardUsers });
  }

  onMemberAdd = (user) => {
    let { card } = this.state
    let { loggedUser } = this.state

    const memberIndx = card.members.findIndex(member => member._id === user._id)
    if (memberIndx === -1) {
      card.members.push(user)
      card.comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: `${loggedUser.fullname} added ${user.fullname} to this card` })
    }
    else {
      card.comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: `${loggedUser.fullname} removed ${user.fullname} from this card` })
      card.members.splice(memberIndx, 1)
    }
    this.setState({ card }, () => {
      this.props.saveCard(
        this.state.card,
        this.props.stack,
        this.props.selectedBoard
      );
    });
  }

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
    this.setState({ card, comments });

    this.props.saveCard(
      this.state.card,
      this.props.stack,
      this.props.selectedBoard
    );
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
      this.props.saveCard(
        this.state.card,
        this.props.stack,
        this.props.selectedBoard
      );
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

  onClosePopUps = () => {
    eventBus.emit('close')

  }

  deleteChecklist = (checklistId) => {
    const { card } = this.state;
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

  render() {
    const { card, onCloseModal, stack } = this.props;
    const { checklists } = this.state.card;
    const labels = this.state.card.labels;
    // const { boardUsers } = this.state;
    const cardMembers = this.state.card.members;
    console.log('card is:', card);
    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section onClick={this.onClosePopUps} className="card-details-container">
            <div
              className="card-details-cover"
              style={{ background: `${this.state.card.coverColor}` }}
            ></div>
            <div className="card-details-body">
              <div className="card-details-top">
                <h2 className="card-details-title">{card.title}</h2>
                <p className="card-details-list">in list {stack.title} </p>
              </div>
              <div className="details-list-container flex">
                <div className="column-container flex column">
                  {/* CARD LABELS */}
                  {labels.length !== 0 && (<CardLabels className="labels-txt" labels={labels} />)}
                  {cardMembers.length !== 0 && <MembersAvatar users={cardMembers} />}
                  <CardDescription card={card} />
                  {checklists.length !== 0 && (<CardChecklist onRemove={this.deleteChecklist} checklists={checklists} />)}
                  <CardActivity card={card} onCommentAdd={this.addComment} />
                </div>
                <div className="sidebar-container">
                  <CardSideBar
                    card={card}
                    stack={stack}
                    onMemberAdd={this.onMemberAdd}
                    boardUsers={this.state.boardUsers}
                    onCheckListSelect={this.addChecklist}
                    onCoverColorSelect={this.setCardColor}
                    onLabelColorSelect={this.setLabelOnCard}
                  />
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
    users: state.userModule.users
  };
};

const mapDispatchToProps = {
  saveCard,
  loadUsers,
};

export const CardDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardDetails);
