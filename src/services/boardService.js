import { storageService } from '../services/misc/storageService.js'
const fs = require('fs')
const gBoards = require('../data/board.json')

export const boardService = {
    query
}
query()
function query() {
    storageService.saveToStorage('boards', gBoards)
    return gBoards
}

function _saveBoardsToFile() {
    fs.writeFileSync('data/board.json', JSON.stringify(gBoards, null, 2))
}
