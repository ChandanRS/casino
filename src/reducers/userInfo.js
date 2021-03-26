
import {
    USER_INFO
} from '../actions/types'

// const initialState = ""
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action){
   const { type,payload } = action
   if(type === USER_INFO){
    return {
        ...state,
        ...payload
    }}
    return state
}
   