import { combineReducers } from 'redux';
import auth from './auth'
import addrow from './addrow'
import userInfo from './userInfo'
import { LOGOUT } from '../actions/types'
const appReducer = combineReducers({
    auth,
    addrow,
    userInfo
})


const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
      state = undefined;
    }
    return appReducer(state, action);
  };

export default rootReducer;