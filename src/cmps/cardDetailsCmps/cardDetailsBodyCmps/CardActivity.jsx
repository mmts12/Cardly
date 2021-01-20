import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { clientsClaim } from 'workbox-core';
import { Avatar } from '@material-ui/core';



export class CardActivity extends Component {

    state = {
        comment: '',
        isActivitySelected: false,
    }

    componentDidMount() {
        this.setState({ comment: this.props.comment })
    }


    handleChange = (ev) => {
        let { comment } = this.state
        comment = ev.target.value
        this.setState({ comment })
    }

    onEditActivity = () => {
        const { isActivitySelected } = this.state
        isActivitySelected ? this.setState({ isActivitySelected: false }) : this.setState({ isActivitySelected: true })
    }

    convertToDate = (timestamp) => {
        console.log('timestamp is:', timestamp);
        const date = new Date(timestamp).toLocaleString();
        console.log('date is:', date);
        const day = date.substring(0, date.indexOf('/'));
        const month = date.substring(2, 4);
        const year = date.substring(5, 7);
        const time = date.substring(11, 16);

        return (`${day}-${month}-${year} ${time}`)
    }

    render() {
        const { card } = this.props
        return <section className="cd-cmp flex column">

            <div className="card-act-title">
                <FormatListBulletedIcon className="act-icon" />
                <h3 className="cd-subtitle-words">Activity</h3>
            </div>
            <div className="cd-subtitle-txt">
                <div className="card-act-textarea">
                    <textarea onChange={this.handleChange} className="act-textarea" placeholder="Write a comment..." ></textarea>
                </div>
                <div className="act-original-save flex space-between">
                    <button onClick={() => this.props.onCommentAdd(this.state.comment)} >Save</button>
                    <div className="activity-bar-icons" >
                        <AttachFileIcon className="activity-icon" />
                        <AlternateEmailIcon className="activity-icon" />
                    </div>
                </div>
            </div>

            {card.comments.map(comment => {
                const fullname = (comment.createdBy) ? comment.createdBy.fullname : '';
                const initials = fullname.substring(0, 1) + fullname.charAt(fullname.indexOf(' ') + 1)
                const date = this.convertToDate(comment.createdAt)
                // console.log('date is:', date);
                return <div key={comment.id} >
                    {!this.state.isActivitySelected ? (
                        <div className="card-activity-container flex">
                            {
                                !initials.length ? <Avatar size="10" src="frontend/src/assets/imgs/avatar-person.svg"></Avatar> :
                                    <Avatar size="10" >{initials}</Avatar>
                            }
                            <textarea className="card-details-activity-textarea" onClick={this.onEditActivity} onChange={this.handleChange} value={comment.txt}></textarea>
                            <div>{date}</div>
                        </div>
                    ) :
                        (<>
                            <div className="card-activity-container">
                                <textarea className="card-details-activity-textarea" onClick={this.onEditActivity} onChange={this.handleChange} value={comment.txt}></textarea>
                            </div>
                            <div className="activity-bar flex space-between">
                                < div className="activity-btn-save" >
                                    <button className="card-desc-save-btn" >Save</button>
                                </div>
                                <div className="activity-bar-icons" >
                                    <AttachFileIcon className="activity-icon" />
                                    <AlternateEmailIcon className="activity-icon" />
                                </div>
                            </div>
                        </>
                        )
                    }
                </div>
            }
            )
            }

        </section >
    }
}


