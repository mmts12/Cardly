const initialState = {
    boards: []
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }

        default:
            return state
    }
}