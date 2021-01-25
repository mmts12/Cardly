import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

export class CoverPopup extends Component {
  togglePopUp = (ev) => {
    const { name, onButtonClick } = this.props;
    onButtonClick(name);
  };

  onAdd = (color) => {
    this.props.onCoverColorSelect(color);
    this.props.onCloseCoverPopUp();
  };

  render() {
    return (
      <section>
        <div className="pop-up-cover">
          <CloseIcon
            className="close-pop-up-btn"
            onClick={(ev) => this.togglePopUp(ev)}
          />
          <p className="pop-up-header">Cover</p>
          <hr></hr>
          <label className="color-title">COLORS</label>
          <section className="cover-color-container flex">
            <div
              className="cover-color cover-green-label"
              onClick={() => this.onAdd('#97BF7C')}
            ></div>
            <div
              className="cover-color cover-yellow-label"
              onClick={() => this.onAdd('#EEDD6B')}
            ></div>
            <div
              className="cover-color cover-orange-label"
              onClick={() => this.onAdd('#E9B366')}
            ></div>
            <div
              className="cover-color cover-red-label"
              onClick={() => this.onAdd('#D2816F')}
            ></div>
            <div
              className="cover-color cover-purple-label"
              onClick={() => this.onAdd('#BC94DB')}
            ></div>
            <div
              className="cover-color cover-blue-label"
              onClick={() => this.onAdd('#749BC0')}
            ></div>
            <div
              className="cover-color cover-light-blue-label"
              onClick={() => this.onAdd('#7DC7DF')}
            ></div>
            <div
              className="cover-color cover-light-green-label"
              onClick={() => this.onAdd('#9DDCAB')}
            ></div>
            <div
              className="cover-color cover-pink-label"
              onClick={() => this.onAdd('#E39ACE')}
            ></div>
            <div
              className="cover-color cover-black-label"
              onClick={() => this.onAdd('#172b4d')}
            ></div>
          </section>
        </div>
      </section>
    );
  }
}
