import { userService } from "../../services/userService.js";


export function loginUser(cred) {
    return (dispatch) => {
        return userService.login(cred)
            .then((res) => {
                console.log('REDUCER server respond is:', res)
                const action = {
                    type: 'LOGIN_USER',
                    loginUser: res
                }
                dispatch(action)
            })
    }
}
export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            // console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}