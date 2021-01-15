const initialState = {
    boards: [],
    selectedBoard: {}
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        case 'SET_BOARD':
            return { ...state, selectedBoard: action.board }
        case 'UPDATE_BOARD':
            return {
                ...state,
                boards: state.boards.map(board => (board._id === action.board._id) ? action.board : board)
            }
        case 'REMOVE_BOARD':
            const selectedBoard = state.selectedBoard;
            const stacks = state.selectedBoard.stacks.filter((stack) => stack.id !== action.stackId)
            selectedBoard.stacks = stacks
            return { ...state, selectedBoard: selectedBoard }
        default:
            return state
    }
}