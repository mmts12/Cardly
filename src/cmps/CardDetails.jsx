import React, { Component } from 'react';
import { utilService } from '../services/misc/utilService.js';
import { CardSideBar } from './cardDetailsCmps/cardDetailsBodyCmps/CardSideBar.jsx';
import { CardDescription } from './cardDetailsCmps/cardDetailsBodyCmps/CardDescription.jsx';
import { CardActivity } from "./cardDetailsCmps/cardDetailsBodyCmps/CardActivity.jsx";
import { CardLabels } from "./cardDetailsCmps/cardDetailsBodyCmps/CardLabels.jsx"
import { CardChecklist } from "./cardDetailsCmps/cardDetailsBodyCmps/CardChecklist.jsx"
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export class CardDetails extends Component {

  state = {
    style: '',
    card: {
      comments: '',
      labels: [],
      checklists: [],
    }
  }

  componentDidMount() {
    const { checklists } = this.props.card
    this.setState(this.state.card.checklists = checklists)
  }


  setLabelOnCard = (color) => {
    const { labels } = this.state.card
    const colorIndx = labels.findIndex(labelColor => labelColor === color)
    console.log('colorIndx is:', colorIndx);
    (colorIndx === -1) ? labels.push(color) : labels.splice(colorIndx, 1)
    this.setState({ labels })
  }

  setCardColor = (color) => {
    let { style } = this.state
    style === color ? style = 'transparent' : style = color
    this.setState({ style })
  }

  addChecklist = (checklistName) => {
    const { checklists } = this.state.card
    let checkListItem = { id: utilService.makeId(), title: checklistName, todos: [], createdAt: Date.now() }
    checklists.push(checkListItem)
    this.setState({ checklists })
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
    const { style } = this.state
    // console.log('checklists is:', this.state.card);
    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section className="card-details-container " >
            <h2 className="card-details-title" style={{ background: `${style}` }}>{card.title}</h2>
            <div className="flex" >
              <div className="flex column">

                {/* CARD LABELS */}
                {labels.length !== 0 && <CardLabels labels={labels} />}

                {/* CARD DESCRIPTION */}
                <CardDescription card={card} />

                {/* CARD CHECKLIST */}
                {checklists.length !== 0 && <CardChecklist onRemove={this.deleteChecklist} checklists={checklists} />}

                {/* CARD ACTIVITY */}

                <CardActivity />


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
