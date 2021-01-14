import React from 'react'
// import Icon from '@material-ui/core/Icon';

export function CardDescription() {
    return (
        <div >
            <div className="flex">
                <h3>= Description</h3>
            </div>
            <textarea className="card-details-btn-desc" placeholder='Add a more detailed description...' rows="4" cols="50"></textarea>
            <div className="flex">
                <button className="card-desc-save-btn">Save</button>X
            </div>
        </div>
    )
}
