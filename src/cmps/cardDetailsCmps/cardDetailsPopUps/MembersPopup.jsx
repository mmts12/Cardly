import React, { Component } from 'react';
import { MemberRow } from '../MemberRow.jsx'

export class MembersPopup extends Component {

    state = {

    }

    render() {
        return (
            <section className="members-container">
                <div className="pop-up-members">
                    <p className="pop-up-header"> Members</p>
                    <hr></hr>
                    <input autoFocus placeholder="Search members"></input>
                    <p>BOARD MEMBERS</p>
                    <MemberRow />
                    <button className="pop-up-members-btn">Show other team members</button>
                </div>
            </section>
        )
    }
}

