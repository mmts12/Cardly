import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MembersAvatar } from '../cmps/cardDetailsCmps/cardDetailsBodyCmps/MembersAvatar';
import MenuIcon from '@material-ui/icons/Menu';

// import { setSelectedBoard } from '../store/actions/boardActions';

export class _StatusBar extends React.Component {
  state = {
    selectedBoard: {},
  };
  componentDidMount() {
    const { selectedBoard } = this.props;
    this.setState({ selectedBoard });
  }

  render() {
    const { selectedBoard } = this.props;
    let members = '';
    if (!selectedBoard) return <h5>Loading...</h5>;
    if (selectedBoard.members) {
      members = selectedBoard.members;
    }
    return (
      <section>
        <div className='status-bar-container flex space-between align-center' >
          <div className="flex align-center">
            <h2 style={{ color: 'white' }} className="status-board-title">{selectedBoard.title}</h2>
            {members.length !== 0 && <MembersAvatar users={selectedBoard.members} />}
          </div>
          <button className="btn1 diff-bgc" onClick={this.onMenuSelect}><span className="btn1-span">Show Menu</span></button>

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

const mapDispatchToProps = {};

export const StatusBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StatusBar);
