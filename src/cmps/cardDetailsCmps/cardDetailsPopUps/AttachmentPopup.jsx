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
                    <p>Computer</p>
                    <p>Google Drive</p>
                    <p>DropBox</p>
                    <p>One Drive</p>
                    <hr></hr>
                    <label>Attach a link</label>
                    <input autoFocus placeholder="Paster any link here"></input>
                    <button className="pop-up-attachment-btn">Attach</button>
                </div>
            </section>
        )
    }
}

