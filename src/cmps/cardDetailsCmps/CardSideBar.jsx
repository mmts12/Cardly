import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';


export function CardSideBar() {
  return (
    <div className="flex column">
      <h4>ADD TO CARD</h4>

      <button className="card-details-btn">
        <PersonIcon></PersonIcon>
        Members</button>
      <button className="card-details-btn"><LocalOfferIcon></LocalOfferIcon>Labels</button>
      <button className="card-details-btn"><CheckBoxIcon></CheckBoxIcon>Checklist</button>
      <button className="card-details-btn"><ScheduleIcon></ScheduleIcon>Due Date</button>
      <button className="card-details-btn"><AttachFileIcon></AttachFileIcon> Attachment</button>
      <button className="card-details-btn"><VideoLabelIcon></VideoLabelIcon> Cover</button>
    </div>
  );
}
