
// import { httpService } from './misc/httpService.js'
import Axios from 'axios'
import { utilService } from './misc/utilService';

var gBoards;
var axios = Axios.create({
    withCredentials: true
})

var baseUrl = 'http://localhost:3030/board'


export const boardService = {
    query, getBoardById, saveNewStack
}


function query() {
    return axios.get(baseUrl)
        .then(res => {
            return res.data

        })
        .catch(() => console.log('no data from server'))
}

function getBoardById(boardId) {

    return axios.get(`${baseUrl}/${boardId}`)
        .then(res => res.data)

}


// async function _getBoardByIdx(boardId, gBoards) {
//     return gBoards.findIndex((board) => board._id === boardId)
// }




async function saveNewStack(stack, boardId) {
    stack.id = utilService.makeId()
    const board = await getBoardById(boardId)
    board.stacks.unshift(stack)
    // console.log('isBoard', board)
    // const boardIdx = await _getBoardByIdx(boardId, gBoards)
    // gBoards[boardIdx] = board
    // console.log(gBoards)
    return Promise.resolve(board)
    // axios.put(`${baseUrl}/${boardId}`, board)
    //     .then(res => res.data)

}

