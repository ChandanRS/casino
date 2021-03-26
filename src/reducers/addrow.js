
import {
    ADD_ROW
} from '../actions/types'

// const initialState = ""
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action){
   const { type,payload } = action
   if(type === ADD_ROW){
    return {
        ...state,
        row : payload
    }
   }
   return state
} 