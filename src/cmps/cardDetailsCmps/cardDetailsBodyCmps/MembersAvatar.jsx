import React from 'react'
import { Avatar } from '@material-ui/core';

export function MembersAvatar({ users }) {
    return (
        <section className="members-avatar-cont flex ">
            {users.map(user => {
                return <div key={user._id} className="avatar-cont" >
                    <Avatar size="10" src={user.imgUrl} />
                </div>
            })
            }
        </section>
    )
}
