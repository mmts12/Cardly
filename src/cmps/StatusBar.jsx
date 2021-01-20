import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MembersAvatar } from '../cmps/cardDetailsCmps/cardDetailsBodyCmps/MembersAvatar';

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
        <div className="status-bar-container flex align-center">
          <h2>{selectedBoard.title}</h2>
          {members.length && <MembersAvatar users={selectedBoard.members} />}
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
