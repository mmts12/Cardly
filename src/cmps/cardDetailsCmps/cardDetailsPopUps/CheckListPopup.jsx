import React, { Component } from 'react';

export class CheckListPopup extends Component {

    state = {
        value: 'Checklist'
    }

    handleInput = (ev) => {
        const value = ev.target.value
        this.setState({ value })
    }


    render() {
        let { value } = this.state
        return (
            <section>
                <div className="pop-up-checklist">
                    <p className="pop-up-header">Add Checklist</p>
                    <hr></hr>
                    <div>Title</div>
                    <input autoFocus onChange={this.handleInput} defaultValue="Checklist"></input>
                    <button onClick={() => { this.props.onCheckListSelect(this.state.value) }} className="pop-up-checklist-btn">Add</button>
                </div>
            </section>
        )
    }
}

