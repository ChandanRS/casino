import { GET_PROFILE, PROFILE_ERROR,  GET_PROFILES} from '../actions/types'

const initialState = {
    profile:null,
    profiles:[],
    loading: true,
    error:{}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState,action){
    const { type, payload } = action

    switch(type){
        case GET_PROFILE: 
        return {
            ...state,
            profile: payload,
            loading: false
            // user:'crs'
        }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                // profile: null // Added this
            }
    

    case GET_PROFILES :
        return {
            ...state,
            loading: false,
            profiles: payload
        }
    
        
        default : return state
    }
}