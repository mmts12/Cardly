import React, { Component } from 'react';

export class CoverPopup extends Component {

    render() {
        return (
            <section>
                <div className="pop-up-cover">
                    <p className="pop-up-header">Cover</p>
                    <hr></hr>
                    <label>COLORS</label>
                    <section className="cover-color-contianer flex">
                        <div className="cover-color cover-green-label" onClick={() => this.props.onCoverColorSelect('#97BF7C')}></div>
                        <div className="cover-color cover-yellow-label" onClick={() => this.props.onCoverColorSelect('#EEDD6B')}></div>
                        <div className="cover-color cover-orange-label" onClick={() => this.props.onCoverColorSelect('#E9B366')}></div>
                        <div className="cover-color cover-red-label" onClick={() => this.props.onCoverColorSelect('#D2816F')}></div>
                        <div className="cover-color cover-purple-label" onClick={() => this.props.onCoverColorSelect('#BC94DB')}></div>
                        <div className="cover-color cover-blue-label" onClick={() => this.props.onCoverColorSelect('#749BC0')}></div>
                        <div className="cover-color cover-light-blue-label" onClick={() => this.props.onCoverColorSelect('#7DC7DF')}></div>
                        <div className="cover-color cover-light-green-label" onClick={() => this.props.onCoverColorSelect('#9DDCAB')}></div>
                        <div className="cover-color cover-pink-label" onClick={() => this.props.onCoverColorSelect('#E39ACE')}></div>
                        <div className="cover-color cover-black-label" onClick={() => this.props.onCoverColorSelect('#333')}></div>
                    </section>
                    <button className="pop-up-members-btn">Add</button>
                </div>
            </section>
        )
    }
}

