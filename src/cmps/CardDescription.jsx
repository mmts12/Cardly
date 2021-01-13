import React from 'react'
// import Icon from '@material-ui/core/Icon';

export function CardDescription() {
    return (
        <div className="">
            <div className="flex">
                {/* <Icon>Subject</Icon> */}

                <h3>Description</h3>
            </div>
            <textarea placeholder='Add a more detailed description...' rows="4" cols="50"></textarea>
            <div className="flex">
                <button>Save</button>
            </div>
        </div>
    )
}
