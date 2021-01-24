// import utilService from './utilService.js'
import { httpService } from './httpService'
import { sesStorage } from './storageSession.js'
import Axios from 'axios'
var axios = Axios.create({
    withCredentials: true
})

//For Heroku use
const baseUrl = (process.env.NODE_ENV !== 'development')
    ? '/api/auth'
    : '//localhost:3030/api/auth';
// const baseUrl = 'http://localhost:3030/api/auth';

// var gUser = null;
const STORAGE_KEY = 'loggedinUser'

export const userService = {
    getLoggedinUser,
    login,
    signup,
    logout,
    getUsers
}

function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

// credentials strucutre: {username: '', password: ''}
function login(credentials) {
    console.log(credentials)
    return axios.post(`${baseUrl}/login`, credentials)
        .then(res => res.data)
        .then(user => {
            console.log(user)
            console.log('Login success');
            return _handleLogin(user);
        })
}
// credentials strucutre: {username: '', password: '', fullname: ''}
function signup(credentials) {
    return axios.post(`${baseUrl}/signup`, credentials)
        .then(res => res.data)
        .then(user => {
            console.log('Signup success');
            return _handleLogin(user);
        })
}
function logout() {
    return axios.post(`${baseUrl}/logout`)
        .then(res => res.data)
        .then(() => {
            console.log('Logout success');
            sesStorage.clear();
        })
}

function getLoggedinUser() {
    return sesStorage.getUser(STORAGE_KEY)

}

function _handleLogin(user) {
    sesStorage.saveUser(STORAGE_KEY, user)
    return user
}