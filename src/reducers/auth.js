
import {
     LOGIN_FAIL,
     LOGIN_SUCCESS,
     LOGOUT,
     USER_LOADED
} from '../actions/types'

const initialState = {
    isAuthenticated: false,
    loading : true,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    const { type,payload } = action
    switch(type){
        
        case LOGIN_SUCCESS:
        case USER_LOADED:
            localStorage.setItem('user',payload)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            }
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('user')
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
            }
        default : return state
    }
} 