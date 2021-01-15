import React, { Component } from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
export class LabelsPopup extends Component {

    state = {

    }


    render() {
        return (
            <section>
                <div className="pop-up-labels">
                    <p className="pop-up-header">Labels</p>
                    <hr></hr>
                    <input autoFocus placeholder="Search labels..."></input>
                    <p>LABELS</p>
                    <button onClick={() => { this.props.onColorSelect('green') }} className="label-color-pick label-green-label"></button><CreateOutlinedIcon></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onColorSelect('yellow') }} className="label-color-pick label-yellow-label"></button><CreateOutlinedIcon></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onColorSelect('orange') }} className="label-color-pick label-orange-label"></button><CreateOutlinedIcon></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onColorSelect('red') }} className="label-color-pick label-red-label"></button><CreateOutlinedIcon></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onColorSelect('purple') }} className="label-color-pick label-purple-label"></button><CreateOutlinedIcon></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onColorSelect('blue') }} className="label-color-pick label-blue-label"></button><CreateOutlinedIcon></CreateOutlinedIcon>
                    <button className="pop-up-labels-btn">Create a new label</button>
                </div>
            </section>
        )
    }
}

