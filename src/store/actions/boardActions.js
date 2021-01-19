import { boardService } from '../../services/boardService';



export function loadBoards() { // Action Creator
    return async dispatch => {
        try {
            const boards = await boardService.query()
            dispatch({ type: 'SET_BOARDS', boards })
        }
        catch (err) {
            console.log('boardActions: err in loadBoards', err)
        }

    }
}

export function setSelectedBoard(boardId) {
    return async dispatch => {
        try {
            const board = await boardService.getBoardById(boardId)
            dispatch({ type: 'SET_BOARD', board })
        }
        catch (err) {
            console.log('boardActions: err in loadBoard', err)
        }

    }
}

export function updateBoard(board) {
    return async dispatch => {
        try {
            dispatch({ type: 'UPDATE_BOARD', board })
        }
        catch (err) {
            console.log('boardActions: err in loadBoard', err)
        }
    }
}


