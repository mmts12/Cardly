import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export class CardActivity extends React.Component {

    state = {

    }

    render() {
        return (
            <section>
                <h3>Activity</h3>
                <div className="card-details-activity">
                    <textarea className="card-details-activity-textarea" placeholder='Add a more detailed description...'></textarea>
                    <div className="activity-bar">
                        <button className="card-details-activity-button">Save</button>
                        <div className="activity-bar-icons" >
                            <AttachFileIcon></AttachFileIcon>
                            <AlternateEmailIcon></AlternateEmailIcon>
                        </div>
                    </div>
                </div>
                <div className="activity-tbn-save flex" >
                    <button className="card-desc-save-btn" onClick={this.onSaveCardDesc}>Save</button>
                </div>
            </section>
        )
    }
}

