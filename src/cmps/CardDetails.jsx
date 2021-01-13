import React, { Component } from 'react';
import { CardSideBar } from './CardSideBar.jsx';

export class CardDetails extends Component {
  render() {
    return (
      <div>
        <CardSideBar />
        <main>
          <h2>Card CardDetails</h2>
        </main>
      </div>
    );
  }
}
