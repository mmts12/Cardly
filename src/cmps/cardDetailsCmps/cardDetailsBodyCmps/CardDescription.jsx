import React, { Component } from 'react';
import SubjectIcon from '@material-ui/icons/Subject';
// import Icon from '@material-ui/core/Icon';


export class CardDescription extends Component {
    state = {
        card: {}
    }
    componentDidMount() {
        this.setState({ card: this.props.card })
    }


    handleInput = (ev) => {
        const { card } = this.state
        card.desc = ev.target.value
        this.setState({ card })

    }

    onSaveCardDesc = () => {
        //

    }

    render() {
        const { card } = this.props
        return (
            <section className="card-desc-container">
                <div className="card-desc-title">
                    <SubjectIcon className="desc-icon" />
                    <h3 className="card-desc-words">Description</h3>
                </div>
                <div className="card-desc-textarea">
                    <textarea className="cd-textarea" placeholder='Add a more detailed description...' value={card.desc} rows="4" cols="50" onChange={this.handleInput}></textarea>
                </div >
            </section >

        )
    }
}
