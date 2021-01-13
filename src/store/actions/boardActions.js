import { boardService } from '../../services/boardService';

export function loadBoards() { // Action Creator
    return (dispatch) => {
        return boardService.query()
            .then(boards => {
                const action = {
                    type: 'SET_BOARDS',
                    boards
                }
                dispatch(action)
            })
    }
}
export function setSelectedBoard(board) { // Action Creator
    return (dispatch) => {
        console.log(board)
        const action = {
            type: 'SET_BOARD',
            board
        }
        dispatch(action)
    }
}
