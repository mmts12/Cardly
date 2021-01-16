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
export function saveCard(card, stack, selectedBoard) {
    return (dispatch) => {
        return boardService.saveCard(card, stack, selectedBoard)
        // .then((board) => {
        //     console.log(board)
        //     const action = {
        //         type: 'UPDATE_BOARD',
        //         board,
        //     }
        //     dispatch(action)
        // })
    }
}