
import {SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER} from '../type';

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {}, 
    likes: [],
    notifications: []
};

export default function(state = initialState, action) {
    switch(action.type){
        case SET_AUTHENTICATED:
            return{
                ...state, 
                authenticated: true
            };
        case SET_UNAUTHENTICATED: // UNTUK SIGN OUT
            return{
                initialState,
                credentials: {}
            };
        case SET_USER:
            return{
                authenticated: true,
                loading: false,
                credentials: {...action.payload}
                // ...action.payload 
            };
        case LOADING_USER:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}