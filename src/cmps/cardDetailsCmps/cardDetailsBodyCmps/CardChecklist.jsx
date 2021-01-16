import React, { Component } from 'react';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';

export class CardChecklist extends Component {

    state = {
        show: 'false'
    }
    // toggleAddItem(show) {
    //     let { show } = this.state
    //     this.setState({ show })
    // }

    render() {
        const { checklists } = this.props
        return (<div>
            {checklists.map((checklist, idx) => {
                return <section key={idx}>
                    <div className="flex">
                        <PlaylistAddCheckOutlinedIcon></PlaylistAddCheckOutlinedIcon>
                        <h3 className="cd-subtitle"> {checklist.title}</h3>
                    </div>
                    {/* <button onClick={() => this.toggleAddItem(!show)} >Add an Item</button> */}
                    {/* {show && <div>
                        <input placeholder="Add an item" ></input>
                        <button>Save</button>
                    </div>} */}
                </section>

            })}
        </div>
        )
    }
}

