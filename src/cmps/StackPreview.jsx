import React, { Component } from 'react';
import { CardList } from './CardList';
import EditIcon from '@material-ui/icons/Edit';

export class StackPreview extends Component {
  render() {
    const { stack } = this.props;
    return (
      <div className="stack-preview-card card-list">
        <h3 className="stack-title">
          {stack.title}
          <EditIcon className="stack-preview-edit-icon"></EditIcon>
        </h3>
        <CardList cards={stack.cards} />
      </div>
    );
  }
}
