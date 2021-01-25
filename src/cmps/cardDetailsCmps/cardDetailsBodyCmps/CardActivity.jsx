import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { clientsClaim } from 'workbox-core';
import { Avatar } from '@material-ui/core';

export class CardActivity extends Component {
  state = {
    comment: '',
    isActivitySelected: false,
  };

  componentDidMount() {
    this.setState({ comment: this.props.comment });
  }

  handleChange = (ev) => {
    let { comment } = this.state;
    comment = ev.target.value;
    this.setState({ comment });
  };

  onEditActivity = () => {
    const { isActivitySelected } = this.state;
    isActivitySelected
      ? this.setState({ isActivitySelected: false })
      : this.setState({ isActivitySelected: true });
  };

  convertToDate = (timestamp) => {
    let date = new Date(timestamp).toLocaleString();
    const dateCopy = date.split('/');
    const day = dateCopy[0];
    const month = dateCopy[1];
    const year = dateCopy[2];
    return `${day}/${month}/${year}`;
  };

  onCommentSave = () => {
    const { onCommentAdd } = this.props;
    onCommentAdd(this.state.comment);
    const comment = '';
    this.setState({ comment });
  };

  render() {
    const { card } = this.props;
    const { comment } = this.state;
    return (
      <section className="cd-cmp flex column">
        <div className="card-act-title">
          <FormatListBulletedIcon className="act-icon" />
          <h3 className="cd-subtitle-words">Activity</h3>
        </div>
        <div>
          <div className="cd-subtitle-txt">
            <div className="card-act-textarea">
              <textarea
                onChange={this.handleChange}
                className="act-textarea"
                value={comment}
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <div className="act-original-save flex space-between align-center">
              <button className="save-btn" onClick={this.onCommentSave}>
                Save
              </button>
              {/* <div className="activity-bar-icons">
                <AttachFileIcon className="activity-icon" />
                <AlternateEmailIcon className="activity-icon" />
              </div> */}
            </div>
          </div>
        </div>

        {card.comments.map((comment) => {
          const fullname = comment.createdBy ? comment.createdBy.fullname : '';
          const initials =
            fullname.substring(0, 1) +
            fullname.charAt(fullname.indexOf(' ') + 1);
          const date = this.convertToDate(comment.createdAt);
          // console.log('date is:', date);
          return (
            <div key={comment.id}>
              <div className="card-activity-container flex">
                {!initials.length ? (
                  <Avatar
                    size="10"
                    src="frontend/src/assets/imgs/avatar-person.svg"
                  ></Avatar>
                ) : (
                  <Avatar size="10">{initials}</Avatar>
                )}
                <div className="card-activity-row">
                  <input
                    className="card-details-activity-textarea"
                    onClick={this.onEditActivity}
                    onChange={this.handleChange}
                    value={comment.txt}
                  ></input>
                  <div className="card-activity-date">{date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
