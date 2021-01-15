import React, { Component } from 'react';

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
                <div className="flex">
                    <h3>Description</h3>
                </div>
                <textarea className="card-details-btn-desc" placeholder='Add a more detailed description...' value={card.desc} rows="4" cols="50" onChange={this.handleInput}></textarea>
                
            </div >

        )
    }
}
