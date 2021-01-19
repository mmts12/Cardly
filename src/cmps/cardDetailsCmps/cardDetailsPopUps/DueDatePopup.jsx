import React, { Component } from 'react';

export class DueDatePopup extends Component {

    state = {

    }


    render() {
        return (
            <section>
                <div className="pop-up-due-date">
                    <p className="pop-up-header">Change Due Date</p>
                    <hr></hr>
                    <input type="date" autoFocus ></input>
                    <input type="time" autoFocus ></input>
                    <p>CALENDAR</p>
                    <button className="save-btn">Save</button>
                </div>
            </section>
        )
    }
}

