import { storageService } from '../services/misc/storageService.js'
const fs = require('fs')
const gBoards = require('../data/board.json')

export const boardService = {
    query, getBoardById
}
query()
function query() {
    storageService.saveToStorage('boards', gBoards)
    return Promise.resolve(gBoards)
}

function getBoardById(boardId) {
    return gBoards.find(function (board) {
        return board._id === boardId;
    })
}

function _saveBoardsToFile() {
    fs.writeFileSync('data/board.json', JSON.stringify(gBoards, null, 2))
}
