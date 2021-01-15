import React, { Component } from 'react';
import { CardSideBar } from './cardDetailsCmps/CardSideBar.jsx';
import { CardDescription } from './CardDescription.jsx';
import { CardActivity } from "./cardDetailsCmps/CardActivity.jsx";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export class CardDetails extends Component {

  state = {
    card: {
      comments: '',
      labels: [],
    }
  }
  setLabelOnCard = (color) => {
    console.log('setLabelOnCard called', color);
    const { labels } = this.state
    this.setState({ ...labels, color })

  }


  render() {
    const { card, onCloseModal } = this.props
    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section className="card-details-container flex column" >
            <h2>{card.title}</h2>
            <div>

              <CardDescription card={card} />
              <h3>Activity</h3>
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
            <CardSideBar onColorSelect={this.setLabelOnCard} />
            <div className="card-inner-container flex">
              <div>
                <CardDescription card={card} />
                <CardActivity />
              </div>
              <CardSideBar />
            </div>
          </section>

        </main>
      </>
    );
  }

}
