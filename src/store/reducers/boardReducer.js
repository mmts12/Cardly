const initialState = {
    boards: [],
    selectedBoard: {}
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        case 'ADD_BOARD':
            return { ...state, boards: [, ...state.boards, action.boardAdded], selectedBoard: action.boardAdded }
        case 'SET_BOARD':
            return { ...state, selectedBoard: action.board }
        case 'DELETE_BOARD':
            return {
                ...state,
                boards: state.boards.filter(board => board._id !== action.boardId)
            }
        case 'UPDATE_BOARD':
            return {
                ...state,
                boards: state.boards.map(board => (board._id === action.board._id) ? action.board : board),
                selectedBoard: action.board
            }
        default:
            return state
    }
}