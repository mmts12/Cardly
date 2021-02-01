import React, { Component } from 'react';
import { StackPreview } from './StackPreview.jsx';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { boardService } from './../services/boardService';
import { updateBoard } from './../store/actions/boardActions';
import { socketService } from './../services/misc/socketService';

export class _StackList extends Component {
  dragEnd = (result) => {
    const { selectedBoard } = this.props;
    const { stacks } = this.props.selectedBoard;
    const { destination, source, type } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === 'card') {
      if (result.destination.droppableId === result.source.droppableId) {
        const board = boardService.updateDragCard(
          result,
          stacks,
          selectedBoard
        );
        this.props.updateBoard(board);
        socketService.emit('update board', board);
      }
      if (result.destination.droppableId !== result.source.droppableId) {
        const board = boardService.updateDragCardToOtherList(
          result,
          stacks,
          selectedBoard
        );
        this.props.updateBoard(board);
        socketService.emit('update board', board);
      }
    } else {
      const board = boardService.moveStack(result, stacks, selectedBoard);
      this.props.updateBoard(board);
      socketService.emit('update board', board);
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
  updateBoard,
};

export const StackList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StackList);
