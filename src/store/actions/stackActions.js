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
                    type: 'REMOVE_BOARD',
                    stackId,
                }
                dispatch(action)
                // const action1 = {
                //     type: 'UPDATE_BOARD',
                //     board,
                // }
                // dispatch(action1)
            })
    }
}