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
                    <input autoFocus placeholder="Search labels..." className="label-input"></input>
                    <p className="label-title">LABELS</p>
                    <button onClick={() => { this.props.onLabelColorSelect('#87B768') }} className="label-color-pick label-green-label"></button><CreateOutlinedIcon className="edit-icon"></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onLabelColorSelect('#E9D661') }} className="label-color-pick label-yellow-label"></button><CreateOutlinedIcon className="edit-icon"></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onLabelColorSelect('#E6A454') }} className="label-color-pick label-orange-label"></button><CreateOutlinedIcon className="edit-icon"></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onLabelColorSelect('#CB6B56') }} className="label-color-pick label-red-label"></button><CreateOutlinedIcon className="edit-icon"></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onLabelColorSelect('#AC7ED1') }} className="label-color-pick label-purple-label"></button><CreateOutlinedIcon className="edit-icon"></CreateOutlinedIcon>
                    <button onClick={() => { this.props.onLabelColorSelect('#4677B5') }} className="label-color-pick label-blue-label"></button><CreateOutlinedIcon className="edit-icon"></CreateOutlinedIcon>
                    <button className="pop-up-labels-btn">Create a new label</button>
                </div>
            </section>
        )
    }
}

