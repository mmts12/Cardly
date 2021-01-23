import React, { Component } from 'react';
import Calendar from 'react-calendar';
import CloseIcon from '@material-ui/icons/Close';
import { DateAndTimePickers } from './../DateAndTimePickers';

export class DueDatePopup extends Component {
  state = {
    dueDate: '',
  };
  togglePopUp = (ev) => {
    const { name, onButtonClick } = this.props;
    onButtonClick(name);
  };

  onSetDate = ({ target }) => {
    let value = target.value;
    this.setState({ dueDate: value });
  };

  onSaveDueDate = () => {
    const { onSetDueDate } = this.props;
    const { dueDate } = this.state;
    onSetDueDate(dueDate);
    this.togglePopUp();
  };

  render() {
    return (
      <section>
        <div className="pop-up-due-date">
          <CloseIcon
            className="close-pop-up-btn"
            onClick={(ev) => this.togglePopUp(ev)}
          />
          <p className="pop-up-header">Change Due Date</p>
          <hr></hr>
          <DateAndTimePickers onSetDate={this.onSetDate} />
          <button className="save-btn" onClick={this.onSaveDueDate}>
            Save
          </button>
        </div>
      </section>
    );
  }
}
