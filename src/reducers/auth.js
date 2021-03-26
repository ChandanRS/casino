
import {
     LOGIN_SUCCESS,
     LOGOUT,
} from '../actions/types'

const initialState = {
    isAuthenticated: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    const { type,payload } = action
    switch(type){
        
        case LOGIN_SUCCESS:
            localStorage.setItem('user',payload)
            return {
                ...state,
                isAuthenticated: true,
            }
        case LOGOUT:
            // localStorage.removeItem('user')
            localStorage.clear()
            return {
                ...state,
                isAuthenticated: false,
            }
        default : return state
    }
} 