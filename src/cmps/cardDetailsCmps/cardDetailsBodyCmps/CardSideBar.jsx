import React, { Component } from 'react';
import { CardDetailsButton } from '../CardDetailsButton.jsx';
import { eventBus } from '../../../services/eventBusService.js'
import { MembersPopup } from '../cardDetailsPopUps/MembersPopup.jsx';
import { LabelsPopup } from '../cardDetailsPopUps/LabelsPopup.jsx';
import { CheckListPopup } from '../cardDetailsPopUps/CheckListPopup.jsx';
import { DueDatePopup } from '../cardDetailsPopUps/DueDatePopup.jsx';
import { AttachmentPopup } from '../cardDetailsPopUps/AttachmentPopup.jsx';
import { CoverPopup } from '../cardDetailsPopUps/CoverPopup.jsx';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

export class CardSideBar extends Component {

  state = {
    memberPopUp: false,
    labelPopUp: false,
    checklistPopUp: false,
    dueDatePopUp: false,
    attachmentPopUp: false,
    coverPopUp: false,
  };
  componentDidMount() {
    this.closeListener = eventBus.on('close', () => {
      this.setState(
        {
          memberPopUp: false,
          labelPopUp: false,
          checklistPopUp: false,
          dueDatePopUp: false,
          attachmentPopUp: false,
          coverPopUp: false,
        })
    })
  }

  componentWillUnmount() {
    this.closeListener()
  }


  onMemberClick = (e) => {
    const showModlaMember = !this.state.memberPopUp;
    this.setState({ memberPopUp: showModlaMember });
  };

  callBack = (popupToOpen) => {
    if (this.state[popupToOpen]) {
      this.setState({ [popupToOpen]: false });
      return;
    }
    this.setState(
      {
        memberPopUp: false,
        labelPopUp: false,
        checklistPopUp: false,
        dueDatePopUp: false,
        attachmentPopUp: false,
        coverPopUp: false,
      },
      () => {
        this.setState({ [popupToOpen]: true });
      }
    );
  };

  render() {
    const { memberPopUp } = this.state;
    const { labelPopUp } = this.state;
    const { checklistPopUp } = this.state;
    const { dueDatePopUp } = this.state;
    const { attachmentPopUp } = this.state;
    const { coverPopUp } = this.state;
    return (
      <div className="sidebar-container flex column">
        <div className="sidebar-title">ADD TO CARD</div>
        {memberPopUp && <MembersPopup name="memberPopUp" onButtonClick={this.callBack} onMemberAdd={this.props.onMemberAdd} boardUsers={this.props.boardUsers} />}
        {labelPopUp && <LabelsPopup name="labelPopUp" onButtonClick={this.callBack} onLabelColorSelect={this.props.onLabelColorSelect} />}
        {checklistPopUp && <CheckListPopup name="checklistPopUp" onButtonClick={this.callBack} onCheckListSelect={this.props.onCheckListSelect} />}
        {dueDatePopUp && <DueDatePopup name="dueDatePopUp" onButtonClick={this.callBack} />}
        {attachmentPopUp && <AttachmentPopup name="attachmentPopUp" onButtonClick={this.callBack} stack={this.props.stack} card={this.props.card} />}
        {coverPopUp && <CoverPopup name="coverPopUp" onButtonClick={this.callBack} onCoverColorSelect={this.props.onCoverColorSelect} />}

        <CardDetailsButton
          icon={<PersonIcon></PersonIcon>}
          text="Members"
          name="memberPopUp"
          onButtonClick={this.callBack}
        />

        <CardDetailsButton
          icon={<LocalOfferIcon></LocalOfferIcon>}
          text="Labels"
          name="labelPopUp"
          onButtonClick={this.callBack}
        />

        <CardDetailsButton
          icon={<CheckBoxIcon></CheckBoxIcon>}
          text="Checklist"
          name="checklistPopUp"
          onButtonClick={this.callBack}
        />

        <CardDetailsButton
          icon={<ScheduleIcon></ScheduleIcon>}
          text="Due Date"
          name="dueDatePopUp"
          onButtonClick={this.callBack}
        />

        <CardDetailsButton
          icon={<AttachFileIcon></AttachFileIcon>}
          text="Attachment"
          name="attachmentPopUp"
          onButtonClick={this.callBack}
        />

        <CardDetailsButton
          icon={<VideoLabelIcon></VideoLabelIcon>}
          text="Cover"
          name="coverPopUp"
          onButtonClick={this.callBack}
        />
      </div>
    );
  }
}
