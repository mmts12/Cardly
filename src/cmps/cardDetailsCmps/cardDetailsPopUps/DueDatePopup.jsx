import React, { Component } from 'react';
import Calendar from 'react-calendar';
import CloseIcon from '@material-ui/icons/Close';


export class DueDatePopup extends Component {

    state = {

    }
    togglePopUp = (ev) => {
        const { name, onButtonClick } = this.props
        onButtonClick(name)
    }

    render() {
        return (
            <section>
                <div className="pop-up-due-date">
                    <CloseIcon
                        className="close-pop-up-btn"
                        onClick={(ev) => this.togglePopUp(ev)}
                    />
                    <p className="pop-up-header">Change Due Date</p>
                    <hr></hr>
                    {/* <input type="date" autoFocus ></input> */}
                    <input type="time" autoFocus ></input>
                    <p>CALENDAR</p>
                    <Calendar />
                    <button className="save-btn">Save</button>
                </div>
            </section>
        )
    }
}

