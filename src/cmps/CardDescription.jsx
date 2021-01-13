import React from 'react'

export function CardDescription() {
    return (
        <div className="">
            <div className="flex">
                <icon>=</icon>
                <h3>Description</h3>
            </div>
            <textarea placeholder='Add a more detailed description...' rows="4" cols="50"></textarea>
            <div className="flex">
                <button>Save</button>
                <icon>=</icon>

            </div>
        </div>
    )
}
