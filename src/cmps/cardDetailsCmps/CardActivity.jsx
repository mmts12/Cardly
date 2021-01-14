import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export class CardActivity extends React.Component {

    state = {

    }

    render() {
        return (
            <section>
                <div className="flex">
                    <h3>Activity</h3>
                </div >
                <div className="card-details-activity">
                    <textarea className="card-details-activity-textarea" placeholder='Add a more detailed description...' rows="4" cols="50"></textarea>
                    <div className="activity-bar flex space-between">
                        <button className="card-details-activity-button">Save</button>
                        <div className="flex">
                            <AttachFileIcon></AttachFileIcon>
                            <AlternateEmailIcon></AlternateEmailIcon>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

