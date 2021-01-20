import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


export function MembersAvatar({ users }) {
    const classes = useStyles();
    return (
        <section className="members-avatar-cont flex ">
            {users.map(user => {
                return <div key={user._id} className="avatar-cont" >
                    <Avatar className={classes.small} size="10" src={user.imgUrl} />
                </div>
            })
            }
        </section>
    )
}
