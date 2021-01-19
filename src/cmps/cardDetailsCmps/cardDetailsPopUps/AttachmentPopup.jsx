import React, { Component } from 'react';

export class AttachmentPopup extends Component {

    state = {

    }

    render() {
        return (
            <section>
                <div className="pop-up-attachments">
                    <p className="pop-up-header"> Attach From...</p>
                    <hr></hr>
                    <p className="attach-choice">Computer</p>
                    <p className="attach-choice">Google Drive</p>
                    <p className="attach-choice">DropBox</p>
                    <p className="attach-choice">One Drive</p>
                    <hr></hr>
                    <label className="attach-label">Attach a link</label>
                    <input autoFocus placeholder="Paste any link here" className="attach-input"></input>
                    <button className="pop-up-attach-btn">Attach</button>
                </div>
            </section>
        )
    }
}

