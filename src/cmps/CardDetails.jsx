import React, { Component } from 'react';
import { CardSideBar } from './cardDetailsCmps/CardSideBar.jsx';
import { CardDescription } from './CardDescription.jsx';
import { CardActivity } from "./cardDetailsCmps/CardActivity.jsx";

export class CardDetails extends Component {


  render() {

    const { card, onCloseModal } = this.props

    return (
      <>
        <div className="modal-bg" onClick={(ev) => onCloseModal(ev)}></div>
        <main>
          <section className="card-details-container flex column" >
            <h2>{card.title}</h2>
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
