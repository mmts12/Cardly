import React, { Component } from 'react';
import { StackPreview } from './StackPreview.jsx';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { moveStack } from '../store/actions/stackActions';
import {
  updateDragCard,
  updateDragCardToOtherList,
} from '../store/actions/cardActions.js';
import CircularProgress from '@material-ui/core/CircularProgress';

export class _StackList extends Component {
  dragEnd = (result) => {
    const { selectedBoard, moveStack } = this.props;
    const { stacks } = this.props.selectedBoard;
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === 'card') {
      if (result.destination.droppableId === result.source.droppableId) {
        this.props.updateDragCard(result, stacks, selectedBoard);
      }
      if (result.destination.droppableId !== result.source.droppableId) {
        this.props.updateDragCardToOtherList(result, stacks, selectedBoard);
      }
    } else {
      console.log('stack moved');
      this.props.moveStack(result, stacks, selectedBoard);
    }
  };

  render() {
    const { stacks } = this.props.board;
    if (!stacks) return <CircularProgress />;
    return (
      <div>
        <DragDropContext onDragEnd={this.dragEnd}>
          <Droppable
            droppableId="all stacks"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="stack-list-container flex "
              >
                {this.props.board.stacks.map((stack, index) => {
                  return (
                    <StackPreview
                      index={index}
                      boardId={this.props.boardId}
                      key={stack.id}
                      stack={stack}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
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
  updateDragCardToOtherList,
  moveStack,
};

export const StackList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StackList);
