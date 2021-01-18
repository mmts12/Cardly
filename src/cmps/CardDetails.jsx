import React, { Component } from 'react';
import { connect } from 'react-redux';
import { utilService } from '../services/misc/utilService.js';
import { CardSideBar } from './cardDetailsCmps/cardDetailsBodyCmps/CardSideBar.jsx';
import { CardDescription } from './cardDetailsCmps/cardDetailsBodyCmps/CardDescription.jsx';
import { CardActivity } from "./cardDetailsCmps/cardDetailsBodyCmps/CardActivity.jsx";
import { CardLabels } from "./cardDetailsCmps/cardDetailsBodyCmps/CardLabels.jsx"
import { CardChecklist } from "./cardDetailsCmps/cardDetailsBodyCmps/CardChecklist.jsx"
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { saveCard } from '../store/actions/cardActions.js';

export class _CardDetails extends Component {

  state = {
    card: {
      comments: [],
      labels: [],
      checklists: [],
      coverColor: ''
    }
  }

  componentDidMount() {
    const { card } = this.props
    this.setState({ card })

  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState is:', prevState);
  //   console.log('this.state is:', this.state);

  //   const x = JSON.stringify(prevState)
  //   const y = JSON.stringify(this.state)
  //   if (x !== y) {
  //     this.props.saveCard(this.state.card, this.props.stack, this.props.selectedBoard)
  //   }
  // }

  setLabelOnCard = (color) => {
    const { card } = this.state
    let { comments } = card
    const colorIndx = card.labels.findIndex(labelColor => labelColor === color)
    if (colorIndx === -1) {
      comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: 'Adi Magori added card label color' })
      card.labels.push(color)
    }
    else {
      comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: 'Adi Magori removed card label color' })
      card.labels.splice(colorIndx, 1)
    }
    this.setState({ card, comments })

    this.props.saveCard(this.state.card, this.props.stack, this.props.selectedBoard)
  }

  setCardColor = (color) => {
    let { card } = this.state
    let { comments } = card
    if (card.coverColor === color) {
      comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: 'Adi Magori removed card cover color' })
      card.coverColor = ''
    }
    else {
      comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: 'Adi Magori added card cover color' })
      card.coverColor = color
    }

    this.setState({ card, comments }, () => { this.props.saveCard(this.state.card, this.props.stack, this.props.selectedBoard) })

  }

  addChecklist = (checklistName) => {
    const { card } = this.state
    let { comments } = card
    let checkListItem = { id: utilService.makeId(), title: checklistName, todos: [], createdAt: Date.now() }
    comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: `Adi Magori added checklist - ${checklistName}` })
    card.checklists.push(checkListItem)
    this.setState({ card })
  }

  deleteChecklist = (checklistId) => {
    const { card } = this.state
    let { comments } = card
    const currChecklistIdx = card.checklists.findIndex(cl => cl.id === checklistId);
    const checklistName = card.checklists[currChecklistIdx].title
    card.checklists.splice(currChecklistIdx, 1)
    comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: `Adi Magori deleted checklist - ${checklistName}` })
    this.setState({ card })
  }
  addComment = (comment) => {
    const { card } = this.state
    card.comments.unshift({ id: utilService.makeId(), createdAt: Date.now(), txt: `Adi Magori added comment - ${comment}` })
    this.setState({ card })

  }



  render() {
    const { card, onCloseModal } = this.props
    const { checklists } = this.state.card
    const labels = this.state.card.labels

    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section className="card-details-container" >
            {card.coverColor.length && <div className="card-details-cover" style={{ background: `${this.state.card.coverColor}` }}></div>}
            <h2 className="card-details-title" >{card.title}</h2>
            <div className="flex" >
              <div className="flex column">

                {/* CARD LABELS */}
                <>  <p className="labels-txt">Labels</p><CardLabels labels={labels} /></>

                {/* CARD DESCRIPTION */}
                <CardDescription card={card} />

                {/* CARD CHECKLIST */}
                {checklists.length !== 0 && <CardChecklist onRemove={this.deleteChecklist} checklists={checklists} />}

                {/* CARD ACTIVITY */}

                <CardActivity card={card} onCommentAdd={this.addComment} />

              </div>
              <div >
                <CardSideBar onCheckListSelect={this.addChecklist} onCoverColorSelect={this.setCardColor} onLabelColorSelect={this.setLabelOnCard} />
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
  };
};

const mapDispatchToProps = {
  saveCard
};

export const CardDetails = connect(mapStateToProps, mapDispatchToProps
)(_CardDetails);

