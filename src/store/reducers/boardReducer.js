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

        default:
            return state
    }
}