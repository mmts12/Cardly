import { boardService } from '../../services/boardService';
import { socketService } from './../../services/misc/socketService';


export function addBoard(board) {
    return async dispatch => {
        try {
            const boardAdded = await boardService.addBoard(board)
            dispatch({ type: 'ADD_BOARD', boardAdded })
            return boardAdded;
        }
        catch (err) {
            console.log('boardActions: err in addBoard', err)
        }
    }
}

export function removeBoard(boardId) {
    return async dispatch => {
        try {
            boardService.removeBoard(boardId)
            dispatch({ type: 'DELETE_BOARD', boardId })
        }
        catch (err) {
            console.log('boardActions: err in delete board', err)
        }
    }
}

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
            socketService.emit('update board', board)
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


