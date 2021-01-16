import { boardService } from './../../services/boardService';


export function removeCard(cardId, stack, selectedBoard) {
    return (dispatch) => {
        return boardService.removeCard(cardId, stack, selectedBoard)
            .then((board) => {
                console.log(board)
                const action = {
                    type: 'UPDATE_BOARD',
                    board,
                }
                dispatch(action)
            })
    }
}