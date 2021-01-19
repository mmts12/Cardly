import React from 'react'
import { Avatar } from '@material-ui/core';

export function MembersAvatar({ users }) {
    return (
        <section className=" flex ">
            {users.map(user => {
                return <div key={user._id} >
                    <Avatar size="10" src={user.imgUrl} />
                </div>
            })
            }
        </section>
    )
}
