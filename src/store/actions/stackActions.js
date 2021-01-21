import { boardService } from './../../services/boardService';

export function addStack(stack, selectedBoard) {
    return (dispatch) => {
        return boardService.saveNewStack(stack, selectedBoard)
            .then((board) => {
                const action = {
                    type: 'UPDATE_BOARD',
                    board,
                }
                dispatch(action)
            })
    }
}
export function removeStack(stackId, boardId, selectedBoard) {
    return (dispatch) => {
        return boardService.removeStack(stackId, boardId, selectedBoard)
            .then((board) => {
                const action = {
                    type: 'UPDATE_BOARD',
                    board,
                }
                dispatch(action)
            })
    }
}
export function saveStack(stack, selectedBoard) {
    return (dispatch) => {
        return boardService.saveStack(stack, selectedBoard)
            .then((board) => {
                const action = {
                    type: 'UPDATE_BOARD',
                    board,
                }
                dispatch(action)
            })
    }
}




export function moveStack(result, stacks, selectedBoard) {
    return async dispatch => {
        try {
            const board = await boardService.moveStack(result, stacks, selectedBoard)
            dispatch({ type: 'UPDATE_BOARD', board })
        }
        catch (err) {
            console.log('stackActions: err in updateBoard', err)
        }
    }
}



