import React, { Component } from 'react';

export class CoverPopup extends React.Component {

    state = {

    }


    render() {
        return (
            <section>
                <div className="pop-up-cover">
                    Cover
                <hr></hr>
                    <label>COLORS</label>
                    <section className="cover-color-contianer flex">
                        <div className="cover-color cover-green-label"></div>
                        <div className="cover-color cover-yellow-label"></div>
                        <div className="cover-color cover-orange-label"></div>
                        <div className="cover-color cover-red-label"></div>
                        <div className="cover-color cover-purple-label"></div>
                        <div className="cover-color cover-blue-label"></div>
                        <div className="cover-color cover-light-blue-label"></div>
                        <div className="cover-color cover-light-green-label"></div>
                        <div className="cover-color cover-pink-label"></div>
                        <div className="cover-color cover-black-label"></div>
                    </section>
                    <button className="pop-up-members-btn">Add</button>
                </div>
            </section>
        )
    }
}

