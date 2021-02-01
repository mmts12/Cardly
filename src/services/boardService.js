// import Axios from 'axios'
import { utilService } from './misc/utilService';
import { httpService } from './httpService';

// var axios = Axios.create({
//     withCredentials: true
// })

//For Heroku use
// const baseUrl = (process.env.NODE_ENV !== 'development')
//     ? '/api/board'
//     : '//localhost:3030/api/board';

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
    updateDragCardToOtherList,
    addBoard,
    removeBoard,
    moveStack
}


function query() {
    return httpService.get('board')
}

function getBoardById(boardId) {
    return httpService.get(`board/${boardId}`)

}

function addBoard(board) {
    return httpService.post(`board`, board)
}

function removeBoard(boardId) {
    httpService.delete(`board/${boardId}`)

}

async function _updateBoard(board) {
    return await httpService.put(`board/${board._id}`, board)
}

function saveNewStack(stack, selectedBoard) {
    const selectedBoardCopy = { ...selectedBoard }
    stack.id = utilService.makeId()
    selectedBoardCopy.stacks.push(stack)
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
}


function removeStack(stackId, boardId, selectedBoard) {
    const selectedBoardCopy = { ...selectedBoard }
    const stacks = selectedBoard.stacks.filter((stack) => stack.id !== stackId)
    selectedBoardCopy.stacks = stacks
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
}

function saveStack(stack, selectedBoard) {
    const selectedBoardCopy = { ...selectedBoard }
    const newStacks = selectedBoardCopy.stacks.map((currStack) => currStack.id === stack.id ? stack : currStack)
    selectedBoardCopy.stacks = newStacks
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy
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
    cardToAdd.dueDate = ''
    cardToAdd.createdAt = Date.now()
    cardToAdd.coverColor = ''
    stackCopy.cards.push(cardToAdd)
    const newStacks = selectedBoardCopy.stacks.map((currStack) => currStack.id === stackCopy.id ? stackCopy : currStack)
    selectedBoardCopy.stacks = newStacks
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
}

function removeCard(cardId, stack, selectedBoard) {
    const stackCopy = { ...stack }
    const selectedBoardCopy = { ...selectedBoard }
    const newCards = stackCopy.cards.filter((card) => card.id !== cardId)
    stackCopy.cards = newCards
    const newStacks = selectedBoardCopy.stacks.map((stack) => (stack.id === stackCopy.id) ? stackCopy : stack)
    selectedBoardCopy.stacks = newStacks
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
}

function saveCard(card, stack, selectedBoard) {
    const cardCopy = { ...card }
    const stackCopy = { ...stack }
    const selectedBoardCopy = { ...selectedBoard }
    const newCards = stackCopy.cards.map((card) => card.id === cardCopy.id ? cardCopy : card)
    stackCopy.cards = newCards
    const newStacks = selectedBoardCopy.stacks.map((stack) => (stack.id === stackCopy.id) ? stackCopy : stack)
    selectedBoardCopy.stacks = newStacks
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
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
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
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
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
}

function moveStack(result, stacks, selectedBoard) {
    const { destination, source } = result;
    const stacksCopy = [...stacks];
    const selectedBoardCopy = { ...selectedBoard };
    const stackRemoved = stacksCopy.splice(source.index, 1)[0];
    stacksCopy.splice(destination.index, 0, stackRemoved)
    selectedBoardCopy.stacks = stacksCopy
    _updateBoard(selectedBoardCopy)
    return selectedBoardCopy;
}
