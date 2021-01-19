import React, { Component } from 'react';
import { cloudinaryService } from '../../../services/cloudinaryService.js';
import { saveCard } from './../../../store/actions/cardActions';
import { connect } from 'react-redux';

export class _AttachmentPopup extends Component {
  state = {
    card: {},
  };
  componentDidMount() {
    const { card } = this.props;
    this.setState({ card });
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

<<<<<<< HEAD
  render() {
    return (
      <section>
        <div className="pop-up-attachments">
          <p className="pop-up-header"> Attach From...</p>
          <hr></hr>
          <p>
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
          <p>Google Drive</p>
          <p>DropBox</p>
          <p>One Drive</p>
          <hr></hr>
          <label>Attach a link</label>
          <input autoFocus placeholder="Paster any link here"></input>
          <button className="pop-up-attachment-btn">Attach</button>
        </div>
      </section>
    );
  }
=======
    }

    render() {
        return (
            <section>
                <div className="pop-up-attachments">
                    <p className="pop-up-header"> Attach From...</p>
                    <hr></hr>
                    <p className="attach-choice">Computer</p>
                    <p className="attach-choice">Google Drive</p>
                    <p className="attach-choice">DropBox</p>
                    <p className="attach-choice">One Drive</p>
                    <hr></hr>
                    <label className="attach-label">Attach a link</label>
                    <input autoFocus placeholder="Paste any link here" className="attach-input"></input>
                    <button className="pop-up-attach-btn">Attach</button>
                </div>
            </section>
        )
    }
>>>>>>> 21089892abe1a694235a746e2d310ea1394477f3
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
