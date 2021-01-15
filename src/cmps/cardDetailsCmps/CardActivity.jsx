import React, { Component } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

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
        const { comment } = this.props
        return (
            <section>
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
        )
    }
}

