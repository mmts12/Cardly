import { boardService } from './../../services/boardService';

export function addCard(cardToAdd, stack, selectedBoard) {
    return (dispatch) => {
        return boardService.addCard(cardToAdd, stack, selectedBoard)
            .then((board) => {
                const action = {
                    type: 'UPDATE_BOARD',
                    board,
                }
                dispatch(action)
            })
    }
}


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

export function updateDragCard(result, stacks, selectedBoard) {
    return (dispatch) => {
        return boardService.updateDragCard(result, stacks, selectedBoard)
            .then((board) => {
                const action = {
                    type: 'UPDATE_BOARD',
                    board,
                }
                dispatch(action)
            })
    }
}

export function updateDragCardToOtherList(result, stacks, selectedBoard) {
    return (dispatch) => {
        return boardService.updateDragCardToOtherList(result, stacks, selectedBoard)
            .then((board) => {
                const action = {
                    type: 'UPDATE_BOARD',
                    board,
                }
                dispatch(action)
            })
    }
}

