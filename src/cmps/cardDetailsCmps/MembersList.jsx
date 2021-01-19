import React from 'react';
// import Avatar from 'react-avatar';
import { Avatar } from '@material-ui/core';


export class MembersList extends React.Component {

    state = {

    }
    render() {
        const { users } = this.props
        return (
            <section className="member-row ">
                {users.map(user => {
                    return <div onClick={() => this.props.onMemberAdd(user)} className="avatars flex" key={user._id}>
                        <Avatar size="20" src={user.imgUrl} />
                        <h3>{user.fullname}</h3>
                    </div>
                }
                )}
            </section>
        )
    }
}

