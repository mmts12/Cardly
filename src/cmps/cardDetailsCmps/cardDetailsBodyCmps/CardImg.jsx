import React from 'react'
import AttachFileIcon from '@material-ui/icons/AttachFile';

export function CardImg({ card, onRemoveImage }) {
    return (
        <section>
            <div className="card-att-title flex">
                <AttachFileIcon className="att-icon" />
                <h3 className="cd-subtitle-words">Attachments</h3>
            </div>
            <div className="flex">
                <img className="cd-img" src={card.imgUrl} alt="" />
                <div className="flex column">
                    <p className="img-name">{card.imgUrl}</p>
                    <button className="attachment-del-btn" onClick={() => onRemoveImage(card)} >Delete</button>
                </div>
            </div>
        </section>
    )
}
