import axios from 'axios'
import { Toast } from 'antd-mobile'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    msg:'',
    isAuth:false,
    user:'',
    psw:'',
    type:' '
}
//reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS :
            return {...state, isAuth:true ,...action.payload};
        case ERROR_MSG:
            return {...state, isAuth:false, msg:action.msg}
        default :
            return state
    }
}

function registerSuccess(data) {
    return {payload:data, type:REGISTER_SUCCESS, }
}

function errorMsg( msg ) {
    return {msg, type:ERROR_MSG}
}

export function register({user, psw, repeatPsw, type}) {
    if ( !user || !psw || !type) {
        Toast.info('用户名密码必须输入',2)
        return errorMsg('用户名密码必须输入')
    }
    if ( psw !== repeatPsw ) {
        Toast.info('两次输入的密码不一致',10)
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