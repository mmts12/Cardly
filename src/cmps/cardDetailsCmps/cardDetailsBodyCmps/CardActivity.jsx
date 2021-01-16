import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


export class CardActivity extends Component {

    state = {
        comment: {}
    }
    componentDidMount() {
        this.setState({ comment: this.props.comment })
    }
    handleChange = (ev) => {
        const { comment } = this.state
        comment.txt = ev.target.value
        this.setState({ comment })
    }

    render() {
        const { card } = this.props

        return <main>
            <div className="cd-subtitle">
                <FormatListBulletedIcon />
                <h3 className="cd-subtitle-txt">Activity</h3>
            </div>

            <div >
                <textarea placeholder="Write a comment..." ></textarea>
                <div >
                    <button >Save</button>
                    {/* <div className="activity-bar-icons" >
                    <AttachFileIcon></AttachFileIcon>
                    <AlternateEmailIcon></AlternateEmailIcon>
                  </div> */}
                </div>
            </div>
            {card.comments.map(comment => {
                return <section>
                    <div className="card-activity-container">
                        <div className="card-activity-bar flex space-between align-center">
                            {/* <div className="activity-button">
                            <button className="card-activity-button">Save</button>
                        </div>

                        <div className="activity-bar-icons" >
                            <span className="activity-att-icon"> <AttachFileIcon></AttachFileIcon></span>
                            <span className="activity-mail-icon">   <AlternateEmailIcon></AlternateEmailIcon></span>
                        </div> */}
                        </div>
                        <textarea className="card-details-activity-textarea" onChange={this.handleChange} value={comment.txt}></textarea>
                    </div>
                    <div className="activity-tbn-save flex" >
                        <button className="card-desc-save-btn" onClick={this.onSaveCardDesc}>Save</button>
                    </div>
                </section>
            }
            )
            }
        </main>
    }
}