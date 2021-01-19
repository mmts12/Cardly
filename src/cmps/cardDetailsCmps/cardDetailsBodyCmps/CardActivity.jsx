import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { clientsClaim } from 'workbox-core';


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
                return <div key={comment.id} >
                    {!this.state.isActivitySelected ? (
                        <div className="card-activity-container">
                            <textarea className="card-details-activity-textarea" onClick={this.onEditActivity} onChange={this.handleChange} value={comment.txt}></textarea>
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


