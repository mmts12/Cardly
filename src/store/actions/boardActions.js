import { boardService } from '../../services/boardService';

export function loadBoards() { // Action Creator
    return (dispatch) => {
        return boardService.query()
            .then(boards => {
                console.log(boards)
                const action = {
                    type: 'SET_BOARDS',
                    boards
                }
                dispatch(action)
            })
    }
}
