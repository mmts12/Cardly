import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

export class MembersList extends React.Component {

    state = {

    }
    render() {
        const { users } = this.props
        const classes = makeStyles((theme) => ({
            root: {
                display: 'flex',
                '& > * + *': {
                    marginLeft: theme.spacing(2),
                },
            },
            small: {
                width: theme.spacing(3),
                height: theme.spacing(3),
            },
        }));
        return (
            <section className="member-row ">
                {users.map(user => {
                    return <div onClick={() => this.props.onMemberAdd(user)} className="avatars flex" key={user._id}>
                        <Avatar  src={user.imgUrl} className={classes.small} />
                        <h3 className="avatar-username">{user.fullname}</h3>
                    </div>
                }
                )}
            </section>
        )
    }
}

