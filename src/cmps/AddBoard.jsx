import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBoard } from '../store/actions/boardActions';
import { utilService } from './../services/misc/utilService';
import ClearIcon from '@material-ui/icons/Clear';

export class _AddBoard extends Component {
  state = {
    board: {
      activities: [],
      createdAt: Date.now(),
      createdBy: {},
      members: [],
      stacks: [
        { id: utilService.makeId(), cards: [], style: {}, title: 'New List' },
      ],
      style: {
        bgc: '',
        mode: '',
      },
      title: '',
    },
  };

  handleInput = (ev) => {
    const { board } = this.state;
    const { value } = ev.target;
    board.title = value;
    this.setState({ board });
  };

  async onSelectNewBoard(bgc) {
    const { board } = this.state;
    if (!board.title) return;
    board.style.bgc = bgc;
    this.setState({ board });
    this.props.addBoard(board);
    this.props.onCloseAddBoardSection();
  }

  render() {
    const bgc = {
      colors: ['#2e6cb0', '#889BC0', '#A36890', '#F0EFBD'],
      imgsUrl: [
        'https://res.cloudinary.com/dng1vynbr/image/upload/v1611427008/hearts_j79qmn.jpg',
        'https://res.cloudinary.com/drak3llqt/image/upload/v1610553512/img1_uyzefw.jpg',
        'https://res.cloudinary.com/drak3llqt/image/upload/v1610553514/img4_ohr2cl.png',
        'https://res.cloudinary.com/drak3llqt/image/upload/v1610553508/img3_g44phk.png',
        'https://res.cloudinary.com/drak3llqt/image/upload/v1611479917/KK4bC7ds_vuvzil.jpg',
        'https://res.cloudinary.com/dng1vynbr/image/upload/v1611493508/download_smk3qa.jpg',
      ],
    };
    const { onCloseAddBoardSection } = this.props;
    return (
      <section className="add-board-background">
        <div className="add-new-board">
          <button
            className="clear-btn no-growth flex justify-center align-center"
            onClick={onCloseAddBoardSection}
          >
            <ClearIcon></ClearIcon>
          </button>
          <form className="add-board-form flex align-center justify-center">
            <label className="add-board-title">Title:</label>
            <input
              className="add-board-input"
              type="text"
              name=""
              onChange={this.handleInput}
              id=""
              value={this.state.board.title}
            />
          </form>
          <div className=" grid">
            {bgc.colors.map((color) => {
              return (
                <div
                  onClick={() => this.onSelectNewBoard(color)}
                  key={color}
                  className="bgc-add-board pointer"
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
            {bgc.imgsUrl.map((img) => {
              return (
                <div
                  onClick={() => this.onSelectNewBoard(img)}
                  key={img}
                  className="add-new-board-img pointer"
                >
                  <img alt="" src={img} />
                </div>
              );
            })}
          </div>
        </div>
        {/* <button>Add </button> */}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boardModule.boards,
    loggedInUser: state.userModule.loggedInUser,
  };
};

const mapDispatchToProps = {
  addBoard,
};

export const AddBoard = connect(mapStateToProps, mapDispatchToProps)(_AddBoard);
