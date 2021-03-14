import {
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED
} from "./types";
// import setAuthToken from '../utils/setAuthToken'


//Login User
export const login = (username, password) => async (dispatch) => {
  console.log(username, password);
  
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: username
    });
  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
};

//Logout
export const logout = () => (dispatch) => {
  try {
    
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};


//Load user

export const loadUser = () => dispatch=> {
  if(localStorage.getItem('user'))
  dispatch({
    type: USER_LOADED,
    payload: localStorage.getItem('user')
  });
}