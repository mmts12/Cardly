import React, { Component } from 'react';
import { cloudinaryService } from '../../../services/cloudinaryService.js';
import { saveCard } from './../../../store/actions/cardActions';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

export class _AttachmentPopup extends Component {
  state = {
    card: {},
    imageUpload: '',
  };
  componentDidMount() {
    const { card } = this.props;
    this.setState({ card });
  }

  upload = (ev) => {
    this.setState({ imageUpload: 'Uploading' });
    cloudinaryService.uploadImg(ev).then((url) => {
      const { card } = this.state;
      const { stack, selectedBoard } = this.props;
      card.imgUrl = url.secure_url;
      this.setState({ card, imageUpload: '' }, () => {
        this.props.saveCard(card, stack, selectedBoard);
      });
    });
  };

  render() {
    const { card, imageUpload } = this.state;
    return (
      <section>
        <div className="pop-up-attachments">
          <p className="pop-up-header"> Attach From...</p>
          <hr></hr>
          <div className="attach-choice">
            <input
              id="file-upload"
              placeholder="Computer"
              onChange={this.upload}
              type="file"
            ></input>
            <label className="pointer" htmlFor="file-upload">
              {imageUpload ? <CircularProgress /> : 'Computer'}
            </label>
          </div>
          <p className="attach-choice">Google Drive</p>
          <p className="attach-choice">DropBox</p>
          <p className="attach-choice">One Drive</p>
          <hr></hr>
          <label className="attach-label">Attach a link</label>
          <input
            autoFocus
            placeholder="Paster any link here"
            className="attach-input"
          ></input>
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
