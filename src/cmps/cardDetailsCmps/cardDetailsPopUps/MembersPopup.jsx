import React, { Component } from 'react';
import { MembersList } from '../MembersList.jsx';
import CloseIcon from '@material-ui/icons/Close';

export class MembersPopup extends Component {
  togglePopUp = (ev) => {
    const { name, onButtonClick } = this.props;
    onButtonClick(name);
  };

  render() {
    const boardUsers = this.props.boardUsers;
    return (
      <section className="members-container">
        <div className="pop-up-members">
          <CloseIcon
            className="close-pop-up-btn"
            onClick={(ev) => this.togglePopUp(ev)}
          />
          <p className="pop-up-header"> Members</p>
          <hr></hr>
          <input
            autoFocus
            placeholder="Search members"
            className="members-input"
          ></input>
          <p>BOARD MEMBERS</p>
          <MembersList
            onMemberAdd={this.props.onMemberAdd}
            users={boardUsers}
          />
        </div>
      </section>
    );
  }
}
