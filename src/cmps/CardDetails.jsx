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
      comments: '',
      labels: [],
      checklists: [],
      coverColor: ''
    }
  }

  componentDidMount() {
    const { card } = this.props
    this.setState(card)
    // this.setState(this.state.card.labels = labels)

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
    const { labels } = this.state.card
    const colorIndx = labels.findIndex(labelColor => labelColor === color)
    if (colorIndx === -1) labels.push(color)
    else labels.splice(colorIndx, 1)
    this.setState({ labels })
    this.props.saveCard(this.state.card, this.props.stack, this.props.selectedBoard)
  }

  setCardColor = (color) => {
    let { card } = this.state
    if (card.coverColor === color) card.coverColor = 'transparent'
    else card.coverColor = color
    this.setState({ card }, () => { this.props.saveCard(this.state.card, this.props.stack, this.props.selectedBoard) })

  }

  addChecklist = (checklistName) => {
    const { card } = this.state
    let checkListItem = { id: utilService.makeId(), title: checklistName, todos: [], createdAt: Date.now() }
    card.checklists.push(checkListItem)
    this.setState({ card })
  }

  deleteChecklist = (checklistId) => {
    const { checklists } = this.state.card
    const currChecklistIdx = checklists.findIndex(cl => cl.id === checklistId);
    checklists.splice(currChecklistIdx, 1)
    this.setState({ checklists })
  }

  render() {
    const { card, onCloseModal } = this.props
    const { checklists } = this.state.card
    const labels = this.state.card.labels

    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section className="card-details-container " >
            <div className="card-details-cover" style={{ background: `${this.state.card.coverColor}` }}></div>
            <h2 className="card-details-title" >{card.title}</h2>
            <div className="flex" >
              <div className="flex column">

                {/* CARD LABELS */}
                {labels.length !== 0 && <>  <p className="labels-txt">Labels</p><CardLabels labels={labels} /></>}

                {/* CARD DESCRIPTION */}
                <CardDescription card={card} />

                {/* CARD CHECKLIST */}
                {checklists.length !== 0 && <CardChecklist onRemove={this.deleteChecklist} checklists={checklists} />}

                {/* CARD ACTIVITY */}

                <CardActivity card={card} />

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

