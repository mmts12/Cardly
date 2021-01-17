import React, { Component } from 'react';
export class CardLabels extends Component {

    render() {
        const { labels } = this.props
        return (
            <section>
                <div>
                    {labels.map((label, idx) => {
                        return <button key={idx} className="card-label-preview" style={{ background: `${label}` }} ></button>
                    })}
                </div>
            </section>
        )
    }
}

