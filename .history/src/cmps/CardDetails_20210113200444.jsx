import React, { Component } from 'react';
import { CardSideBar } from './CardSideBar.jsx';

export class CardDetails extends Component {
  render() {
    const { card } = this.props
    return (
      <div>
        <main>
          <h2>this.props</h2>
          <CardSideBar />
        </main>
      </div>
    );
  }
}