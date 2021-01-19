import React, { Component } from 'react';
import { connect } from 'react-redux';

export class _AddBoard extends Component {
  state = {
    board: {
      activities: [],
      createdAt: '',
      createdBy: '',
      members: [],
      stacks: [],
      style: {
        bgc: '',
        mode: '',
        title: '',
      },
    },
  };

  handleInput = (ev) => {
    const { board } = this.state;
    const { value } = ev.target;
    board.title = value;
    this.setState({ board });
  };

  render() {
    const bgc = {
      colors: ['#3f89e6', '#3fe6a8', '#f585ae', '#f59f85'],
      imgsUrl: [
        'https://res.cloudinary.com/dscb3040k/image/upload/v1611048026/Screenshot_2021-01-12_130444_ihywxs.png',
        'https://res.cloudinary.com/dscb3040k/image/upload/v1610463893/WhatsApp_Image_2021-01-12_at_17.04.06_idr6gn.jpg',
        'https://res.cloudinary.com/dscb3040k/image/upload/v1611048112/wot_object_268_1920x1080_noc_eng_klurct.jpg',
        'https://res.cloudinary.com/dscb3040k/image/upload/v1611048182/jp-e100_1920x1080cal_sbf3oe.jpg',
      ],
    };
    return (
      <section className="add-new-board">
        <form>
          <label htmlFor="">Title:</label>
          <input type="text" name="" id="" />
        </form>
        <div className=" grid">
          {bgc.colors.map((color) => {
            return (
              <div
                key={color}
                className="bgc-add-board"
                onChange={this.handleInput}
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
          {bgc.imgsUrl.map((img) => {
            return (
              <div key={img} className="add-new-board-img">
                <img src={img} />
              </div>
            );
          })}
        </div>
        {/* <button>Add </button> */}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boardModule.boards,
  };
};

const mapDispatchToProps = {};

export const AddBoard = connect(mapStateToProps, mapDispatchToProps)(_AddBoard);
