import axios from 'axios'


const LOGIN = 'LOGIN'
const LOGOUT = "LOGOUT"
const USER_DATA = 'USER_DATA'

const initState = {
    isAuth:false, 
    user:"李云龙",
    age:0
}

export function auth(state = initState,action) {
    console.log(state,action)
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth:true}
        case LOGOUT:
            return {...state, isAuth:false}
        case USER_DATA:
            return {...state, ...action.payload[0]}
        default:
            return state
    }
}

//action
export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGOUT}
}
export function userData (data) {
    return {type:USER_DATA,payload:data}
}
export function getUserInfo() {
    return dispatch => {
        axios.get('/data')
        .then(res=>{
            dispatch(userData(res.data))
        })
    }
}
