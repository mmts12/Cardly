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