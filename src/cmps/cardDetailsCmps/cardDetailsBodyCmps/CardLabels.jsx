import React, { Component } from 'react';
export class CardLabels extends Component {

    state = {

    }


    render() {
        const { labels } = this.props
        return (
            <section>
                <div>
                    <h3 className="cd-subtitle-txt">Labels</h3>
                    {labels.map((label, idx) => {
                        return <button key={idx} className="card-label-preview" style={{ background: `${label}` }} ></button>
                    })}
                </div>
            </section>
        )
    }
}

