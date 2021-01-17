import React, { Component } from 'react';
import { StackPreview } from './StackPreview.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { updateDragCard } from '../store/actions/cardActions.js';

export class _StackList extends Component {
  dragEnd = (result) => {
    const { selectedBoard } = this.props;
    const { stacks } = this.props.board;
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    if (result.destination.droppableId === result.source.droppableId) {
      this.props.updateDragCard(result, stacks, selectedBoard);
    }
  };

  render() {
    const { stacks } = this.props.board;

    if (!stacks) return <h1>Loading ...(stacks)</h1>;
    return (
      <div>
        <div className="stack-list-container flex ">
          <DragDropContext onDragEnd={this.dragEnd}>
            {this.props.board.stacks.map((stack) => {
              return (
                <StackPreview
                  boardId={this.props.boardId}
                  key={stack.id}
                  stack={stack}
                />
              );
            })}
          </DragDropContext>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBoard: state.boardModule.selectedBoard,
  };
};

const mapDispatchToProps = {
  updateDragCard,
};

export const StackList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StackList);
