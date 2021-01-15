import React, { Component } from 'react';

export class CheckListPopup extends Component {

    state = {

    }


    render() {
        return (
            <section>
                <div className="pop-up-checklist">
                    <p className="pop-up-header">Add Checklist</p>
                    <hr></hr>
                    <div>Title</div>
                    <input autoFocus placeholder="Checklist"></input>
                    <button className="pop-up-checklist-btn">Add</button>
                </div>
            </section>
        )
    }
}

