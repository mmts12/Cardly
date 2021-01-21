import React from 'react'
import AttachFileIcon from '@material-ui/icons/AttachFile';

export function CardImg({ card }) {
    return (
        <section>
            <div className="card-att-title">
                <AttachFileIcon className="att-icon" />
                <h3 className="cd-subtitle-words">Attachments</h3>
            </div>
            <div className="flex">
                <img className="cd-img" src={card.imgUrl} alt="" />
                <div className="flex column">
                    <p>{card.imgUrl}</p>
                    <button>Delete</button>
                </div>
            </div>
        </section>
    )
}
