import { GET_PROFILE, PROFILE_ERROR,GET_PROFILES, GET_REPOS } from './types'
import axios from 'axios';



//GET ALL PROFILES

export const getAllProfiles = () => async dispatch => {
    try {
       const res = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
console.log(res.data)
       dispatch({
           type: GET_PROFILES,
           payload: res.data
       })
    } catch (err) {
        
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg : err.response}
        })
    }
}



//Get Profile by user id
export const getProfileById = (id) => async dispatch => {
    try {
       const res = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
console.log(res.data.data)
       let profileReqd=null
       if(res && res.data && res.data.data){
        profileReqd = res.data.data.filter(data => {
            return data.id.toString() === id.toString()
        } )
       }
console.log('profileReqd')
console.log(profileReqd[0])
       dispatch({
           type: GET_PROFILE,
           payload: profileReqd[0]
       })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            // payload: { msg : err.response.statusText, status: err.response.status}
            payload: { msg : err.response}
        })
    }
}


