import React, { Component } from 'react';
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

  setLabelOnCard = (color) => {
    const { labels } = this.state.card
    const colorIndx = labels.findIndex(labelColor => labelColor === color)
    console.log('colorIndx is:', colorIndx);//without this getting an error =>  Cannot access 'colorIndx' before initialization
    (colorIndx === -1) ? labels.push(color) : labels.splice(colorIndx, 1)
    this.setState({ labels })
  }

  setCardColor = (color) => {
    console.log('serCardColor color is:', color);
    let { style } = this.state
    style === color ? style = 'transparent' : style = color
    this.setState({ style })
  }

  addChecklist = (checklistName) => {
    const { checklists } = this.state.card
    let checkListItem = { id: '123', title: checklistName, todos: [], createdAt: Date.now() }
    checklists.push(checkListItem)
    console.log('checklists is:', checklists);
    this.setState({ checklists })
  }

  render() {
    const { card, onCloseModal } = this.props
    const { checklists } = this.state.card
    const labels = this.state.card.labels
    const { style } = this.state
    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section className="card-details-container flex " >
            <h2 style={{ background: `${style}` }}>{card.title}</h2>
            <div>
              {labels.length !== 0 && <CardLabels labels={labels} />}
              <CardDescription card={card} />

              {checklists.length !== 0 && <CardChecklist checklists={checklists} />}
              <div className="flex">
                <FormatListBulletedIcon></FormatListBulletedIcon>
                <h3 className="cd-subtitle">Activity</h3>
              </div>
              <div >
                <textarea placeholder="Write a comment..." ></textarea>
                <div >
                  <button >Save</button>
                  {/* <div className="activity-bar-icons" >
                    <AttachFileIcon></AttachFileIcon>
                    <AlternateEmailIcon></AlternateEmailIcon>
                  </div> */}
                </div>
              </div>
              <div>
                {card.comments.map(comment => <CardActivity key={comment.id} comment={comment} />)}
              </div>
            </div>
            <CardSideBar onCheckListSelect={this.addChecklist} onCoverColorSelect={this.setCardColor} onLabelColorSelect={this.setLabelOnCard} />

          </section>

        </main>
      </>
    );
  }

}
