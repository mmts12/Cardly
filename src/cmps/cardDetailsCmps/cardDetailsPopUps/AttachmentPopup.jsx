import React, { Component } from 'react';
import { cloudinaryService } from '../../../services/cloudinaryService.js';
import { saveCard } from './../../../store/actions/cardActions';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';


export class _AttachmentPopup extends Component {
  state = {
    card: {},
  };
  componentDidMount() {
    const { card } = this.props;
    this.setState({ card });
  }

  togglePopUp = (ev) => {
    const { name, onButtonClick } = this.props
    onButtonClick(name)
  }

  upload = (ev) => {
    cloudinaryService.uploadImg(ev).then((url) => {
      const { card } = this.state;
      const { stack, selectedBoard } = this.props;
      card.imgUrl = url.secure_url;
      this.setState({ card }, () => {
        this.props.saveCard(card, stack, selectedBoard);
      });
    });
  };

  render() {
    return (
      <section>
        <div className="pop-up-attachments">
          <CloseIcon
            className="close-pop-up-btn"
            onClick={(ev) => this.togglePopUp(ev)}
          />
          <p className="pop-up-header"> Attach From...</p>
          <hr></hr>
          <p className="attach-choice">
            <input
              id="file-upload"
              placeholder="Computer"
              onChange={this.upload}
              type="file"
            ></input>
            <label className="pointer" htmlFor="file-upload">
              Computer
            </label>
          </p>
          <p className="attach-choice">Google Drive</p>
          <p className="attach-choice">DropBox</p>
          <p className="attach-choice">One Drive</p>
          <hr></hr>
          <label className="attach-label">Attach a link</label>
          <input autoFocus placeholder="Paste any link here" className="attach-input"></input>
          <button className="pop-up-attach-btn">Attach</button>
        </div>
      </section>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    selectedBoard: state.boardModule.selectedBoard,
  };
};

const mapDispatchToProps = {
  saveCard,
};

export const AttachmentPopup = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AttachmentPopup);
