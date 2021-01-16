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
            <div >
                <div className="cd-subtitle">
                    <SubjectIcon />
                    <h3 className="cd-subtitle-txt">Description</h3>
                </div>
                <textarea className="card-details-btn-desc" placeholder='Add a more detailed description...' value={card.desc} rows="4" cols="50" onChange={this.handleInput}></textarea>

            </div >

        )
    }
}
