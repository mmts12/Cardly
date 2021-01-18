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
                    <div className="card-desc-words">Description</div>
                </div>
                <div className="card-desc-textarea">
                    <textarea className="cd-textarea" placeholder='Add a more detailed description...' value={card.desc} rows="4" cols="50" onChange={this.handleInput}></textarea>
                </div >
            </section >
            // <section className="card-desc flex" >
            //     <SubjectIcon className="card-desc-icon" />
            //     <div className="cd-subtitle flex column">
            //         <div className="cd-subtitle-txt flex align-center">Description</div>
            //         <textarea className="card-details-btn-desc" placeholder='Add a more detailed description...' value={card.desc} rows="4" cols="50" onChange={this.handleInput}></textarea>
            //     </div >
            // </section >

        )
    }
}
