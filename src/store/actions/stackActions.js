import { boardService } from './../../services/boardService';

export function addStack(stack, boardId) {
    return (dispatch) => {
        return boardService.saveNewStack(stack, boardId)
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
export function addCard(cardToAdd, stack, selectedBoard) {
    return (dispatch) => {
        return boardService.addCard(cardToAdd, stack, selectedBoard)
        // .then((board) => {
        //     const action = {
        //         type: 'UPDATE_BOARD',
        //         board,
        //     }
        //     dispatch(action)
        // })
    }
}


