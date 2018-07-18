import axios from 'axios'
import { Toast } from 'antd-mobile'
import { getRedirectPath } from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    redirectTo:'',
    msg:'',
    isAuth:false,
    user:'',
    psw:'',
    type:' '
}
//reducer
export function user(state = initState, action) {
    switch (action.type) {
        case LOAD_DATA :
            return {...state, ...action.payload}
        case REGISTER_SUCCESS :
            return {...state, isAuth:true ,...action.payload, redirectTo:getRedirectPath(action.payload),msg:''};
        case ERROR_MSG:
            return {...state, isAuth:false, msg:action.msg}
        case LOGIN_SUCCESS :
            return {...state, isAuth:true,...action.payload, redirectTo:getRedirectPath(action.payload),msg:''}
        default :
            return state
    }
}

function registerSuccess(data) {
    return {payload:data, type:REGISTER_SUCCESS, }
}

function loginSuccess(data) {
    return {payload:data, type:LOGIN_SUCCESS, }
}

function errorMsg( msg ) {
    return {msg, type:ERROR_MSG}
}

export function loadData (data) {
    return {payload:data, type:LOAD_DATA}
}

export function register({user, psw, repeatPsw, type}) {
    if ( !user || !psw || !type) {
        Toast.info('用户名密码必须输入',2)
        return errorMsg('用户名密码必须输入')
    }
    if ( psw !== repeatPsw ) {
        Toast.info('两次输入的密码不一致',2)
        return errorMsg('两次输入的密码不一致')
    }
    return dispatch => {
        axios.post('/user/register',{user,psw,type})
        .then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(registerSuccess({user,psw,type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
    
}

export function login({user, psw}) {
    if ( !user || !psw) {
        Toast.info('用户名密码必须输入',2)
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login',{user,psw})
        .then(res => {
            if (res.status === 200 && res.data.code === 0) {
                Toast.info('登陆成功',2)
                dispatch(loginSuccess({user,psw,type:res.data.data.type}))
            } else {
                Toast.info(res.data.msg,2)
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function verifyUserName(name) {
    name = name || '';
    return dispatch => {
        axios.post('/user/verifyName', {name})
        .then(res => {
            if( res.status === 200 && res.data.code === 0 ) {
                // Toast.success('两次输入的密码不一致',2)
            } else {
                Toast.info(res.data.msg,2)
                dispatch (errorMsg(res.data.msg))

            }
        }, res =>{})
    }   
    
}