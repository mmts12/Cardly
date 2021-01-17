import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


export class CardActivity extends Component {

    state = {
        comment: {},
        isActivitySelected: false,
    }
    componentDidMount() {
        this.setState({ comment: this.props.comment })
    }
    handleChange = (ev) => {
        const { comment } = this.state
        comment.txt = ev.target.value
        this.setState({ comment })
    }

    onEditActivity = () => {
        const { isActivitySelected } = this.state
        isActivitySelected ? this.setState({ isActivitySelected: false }) : this.setState({ isActivitySelected: true })
    }

    render() {
        const { card } = this.props
        return <section className="cd-cmp flex">
            <FormatListBulletedIcon />
            <div className="cd-subtitle-txt">
                <h3 className="cd-subtitle-txt flex align-center">Activity</h3>
                <textarea placeholder="Write a comment..." ></textarea>
                <div >
                    <button >Save</button>
                </div>

                {card.comments.map(comment => {
                    return <section key={comment.id}>
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
                                        <button className="card-desc-save-btn" onClick={this.onSaveCardDesc}>Save</button>
                                    </div>
                                    <div className="activity-bar-icons" >
                                        <AttachFileIcon className="activity-icon" />
                                        <AlternateEmailIcon className="activity-icon" />
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </section>
                }
                )
                }
            </div>
        </section >
    }
}


