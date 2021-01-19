import React, { Component } from 'react';
import { MembersList } from '../MembersList.jsx'


export class MembersPopup extends Component {

    state = {
        isTeamShows: false
    }

    onShowTeamMembers = () => {
        let { isTeamShows } = this.state
        isTeamShows = !isTeamShows
        this.setState({ isTeamShows })
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
                    {/* {!isTeamShows && <button onClick={this.onShowTeamMembers} className="pop-up-members-btn">Show other team members</button>} */}
                    {isTeamShows && <MembersList users={boardUsers} />}
                </div>
            </section >
        )
    }
}

