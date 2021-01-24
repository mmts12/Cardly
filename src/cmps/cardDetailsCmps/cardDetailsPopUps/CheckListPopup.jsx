import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

export class CheckListPopup extends Component {
  state = {
    value: 'Checklist',
  };

  togglePopUp = (ev) => {
    const { name, onButtonClick } = this.props;
    onButtonClick(name);
  };

  handleInput = (ev) => {
    const value = ev.target.value;
    this.setState({ value });
  };

  render() {
    let { value } = this.state;
    return (
      <section>
        <div className="pop-up-checklist">
          <CloseIcon
            className="close-pop-up-btn"
            onClick={(ev) => this.togglePopUp(ev)}
          />
          <p className="pop-up-header">Add Checklist</p>
          <hr></hr>
          <div className="pop-up-title">Title</div>
          <input
            autoFocus
            onChange={this.handleInput}
            defaultValue="Checklist"
            className="checklist-input"
          ></input>
          <button
            onClick={() => {
              this.props.onCheckListSelect(value);
            }}
            className="save-btn"
          >
            Add
          </button>
        </div>
      </section>
    );
  }
}
