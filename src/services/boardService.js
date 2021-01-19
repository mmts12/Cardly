
// import { httpService } from './misc/httpService.js'
import Axios from 'axios'
import { utilService } from './misc/utilService';


var axios = Axios.create({
    withCredentials: true
})

var baseUrl = 'http://localhost:3030/api/board'


export const boardService = {
    query,
    getBoardById,
    saveNewStack,
    removeStack,
    saveStack,
    addCard,
    removeCard,
    saveCard,
    updateDragCard,
    updateDragCardToOtherList
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

function saveNewStack(stack, selectedBoard) {
    const selectedBoardCopy = { ...selectedBoard }
    stack.id = utilService.makeId()
    selectedBoardCopy.stacks.push(stack)
    axios.put(`${baseUrl}/${selectedBoardCopy._id}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)

}



function removeStack(stackId, boardId, selectedBoard) {
    const selectedBoardCopy = { ...selectedBoard }
    const stacks = selectedBoard.stacks.filter((stack) => stack.id !== stackId)
    selectedBoardCopy.stacks = stacks
    axios.put(`${baseUrl}/${boardId}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)
}

function saveStack(stack, selectedBoard) {
    const selectedBoardCopy = { ...selectedBoard }
    const newStacks = selectedBoardCopy.stacks.map((currStack) => currStack.id === stack.id ? stack : currStack)
    selectedBoardCopy.stacks = newStacks
    axios.put(`${baseUrl}/${selectedBoardCopy._id}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)
}

function addCard(cardToAdd, stack, selectedBoard) {
    const stackCopy = { ...stack }
    const selectedBoardCopy = { ...selectedBoard }
    cardToAdd.id = utilService.makeId()
    cardToAdd.desc = '';
    cardToAdd.comments = [];
    cardToAdd.members = [];
    cardToAdd.labels = [];
    cardToAdd.checklists = [];
    cardToAdd.dueDate = Date.now() + 86400000
    cardToAdd.createdAt = Date.now()
    cardToAdd.coverColor = ''
    cardToAdd.byMember = {
        _id: "u102",
        fullname: "Mosh Malka",
        imgUrl: "https://res.cloudinary.com/dscb3040k/image/upload/v1610463697/Screenshot_2021-01-12_170113_ialgw7.png"
    }
    stackCopy.cards.push(cardToAdd)
    const newStacks = selectedBoardCopy.stacks.map((currStack) => currStack.id === stackCopy.id ? stackCopy : currStack)
    selectedBoardCopy.stacks = newStacks
    axios.put(`${baseUrl}/${selectedBoardCopy._id}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)
}

function removeCard(cardId, stack, selectedBoard) {
    const stackCopy = { ...stack }
    const selectedBoardCopy = { ...selectedBoard }
    const newCards = stackCopy.cards.filter((card) => card.id !== cardId)
    stackCopy.cards = newCards
    const newStacks = selectedBoardCopy.stacks.map((stack) => (stack.id === stackCopy.id) ? stackCopy : stack)
    selectedBoardCopy.stacks = newStacks
    axios.put(`${baseUrl}/${selectedBoardCopy._id}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)
}

function saveCard(card, stack, selectedBoard) {
    const cardCopy = { ...card }
    const stackCopy = { ...stack }
    const selectedBoardCopy = { ...selectedBoard }
    const newCards = stackCopy.cards.map((card) => card.id === cardCopy.id ? cardCopy : card)
    stackCopy.cards = newCards
    const newStacks = selectedBoardCopy.stacks.map((stack) => (stack.id === stackCopy.id) ? stackCopy : stack)
    selectedBoardCopy.stacks = newStacks
    axios.put(`${baseUrl}/${selectedBoardCopy._id}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)
}

function updateDragCard(result, stacks, selectedBoard) {
    const stacksCopy = [...stacks];
    const selectedBoardCopy = { ...selectedBoard };
    const selectedStack = stacksCopy.find((stack) => stack.id === result.destination.droppableId)
    const cardsCopy = [...selectedStack.cards]
    const cardRemoved = cardsCopy.splice(result.source.index, 1)[0]
    cardsCopy.splice(result.destination.index, 0, cardRemoved)
    selectedStack.cards = cardsCopy
    const stacksToUpdate = selectedBoardCopy.stacks.map((stack) => stack.id === selectedStack.id ? selectedStack : stack)
    selectedBoardCopy.stacks = stacksToUpdate
    axios.put(`${baseUrl}/${selectedBoardCopy._id}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)
}

function updateDragCardToOtherList(result, stacks, selectedBoard) {
    const { destination, source } = result;
    const stacksCopy = [...stacks];
    const selectedBoardCopy = { ...selectedBoard };
    const sourceStack = stacksCopy.find((stack) => stack.id === source.droppableId);
    const cardsSourceCopy = [...sourceStack.cards]
    sourceStack.cards = cardsSourceCopy
    const cardRemoved = sourceStack.cards.splice(result.source.index, 1)[0]
    const destinationStack = stacksCopy.find((stack) => stack.id === destination.droppableId);
    const cardsDestinationCopy = [...destinationStack.cards]
    destinationStack.cards = cardsDestinationCopy
    destinationStack.cards.splice(result.destination.index, 0, cardRemoved)
    axios.put(`${baseUrl}/${selectedBoardCopy._id}`, selectedBoardCopy)
        .then(res => res.data)
    return Promise.resolve(selectedBoardCopy)
}

// combine: null
// destination: {droppableId: "g102", index: 3}
// draggableId: "eW541"
// mode: "FLUID"
// reason: "DROP"
// source: {index: 4, droppableId: "g101"}
// type: "DEFAULT"

