import React, { Component } from 'react';
import { CardSideBar } from './CardSideBar.jsx';

export class CardDetails extends Component {
  render() {
    const { card } = this.props
    return (
      <div>
        <main>
          <h2>card.title</h2>
          <CardDescription />
          <CardSideBar />
        </main>
      </div>
    );
  }
}
