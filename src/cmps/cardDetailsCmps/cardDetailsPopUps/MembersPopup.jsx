import React, { Component } from 'react';
import { MembersList } from '../MembersList.jsx'


export class MembersPopup extends Component {

    state = {

    }



    componentDidMount() {
        //    users = getUsers()
    }


    render() {
        const { isTeamShows } = this.state
        const boardUsers = this.props.boardUsers;
        return (
            <section className="members-container">
                <div className="pop-up-members">
                    <p className="pop-up-header"> Members</p>
                    <hr></hr>
                    <input autoFocus placeholder="Search members" className="members-input"></input>
                    <p>BOARD MEMBERS</p>
                    <MembersList onMemberAdd={this.props.onMemberAdd} users={boardUsers} />
                </div>
            </section >
        )
    }
}

