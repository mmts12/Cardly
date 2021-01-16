
// import { httpService } from './misc/httpService.js'
import Axios from 'axios'
import { utilService } from './misc/utilService';


var axios = Axios.create({
    withCredentials: true
})

var baseUrl = 'http://localhost:3030/board'


export const boardService = {
    query,
    getBoardById,
    saveNewStack,
    removeStack,
    saveStack,
    addCard,
    removeCard
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
    board.stacks.push(stack)
    axios.put(`${baseUrl}/${boardId}`, board)
        .then(res => res.data)
    return Promise.resolve(board)

}

function removeStack(stackId, boardId, selectedBoard) {
    const stacks = selectedBoard.stacks.filter((stack) => stack.id !== stackId)
    selectedBoard.stacks = stacks
    // const board = selectedBoard.stacks.filter((stack) => stack.id !== stackId)
    axios.put(`${baseUrl}/${boardId}`, selectedBoard)
        .then(res => res.data)
    return Promise.resolve(selectedBoard)
}

function saveStack(stack, selectedBoard) {
    axios.put(`${baseUrl}/${selectedBoard._id}`, selectedBoard)
        .then(res => res.data)
    return Promise.resolve(selectedBoard)
}

function addCard(cardToAdd, stack, selectedBoard) {
    cardToAdd.id = utilService.makeId()
    cardToAdd.desc = '';
    cardToAdd.comments = [];
    cardToAdd.members = [];
    cardToAdd.labels = [];
    cardToAdd.checklists = [];
    cardToAdd.dueDate = Date.now() + 86400000
    cardToAdd.createdAt = Date.now()
    cardToAdd.byMember = {
        _id: "u102",
        fullname: "Mosh Malka",
        imgUrl: "https://res.cloudinary.com/dscb3040k/image/upload/v1610463697/Screenshot_2021-01-12_170113_ialgw7.png"
    }
    stack.cards.push(cardToAdd)

    axios.put(`${baseUrl}/${selectedBoard._id}`, selectedBoard)
        .then(res => res.data)
    return Promise.resolve(selectedBoard)
}

function removeCard(cardId, stack, selectedBoard) {
    const newCards = stack.cards.filter((card) => card.id !== cardId)
    stack.cards = newCards
    const newStack = stack
    const newStacks = selectedBoard.stacks.map((stack) => (stack.id === newStack) ? newStack : stack)
    selectedBoard.stacks = newStacks
    axios.put(`${baseUrl}/${selectedBoard._id}`, selectedBoard)
        .then(res => res.data)
    return Promise.resolve(selectedBoard)
}


