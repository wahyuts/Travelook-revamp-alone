import axios from 'axios';
import { useHistory } from "react-router-dom";
import {SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER, MARK_NOTIFICATIONS_READ} from '../type';


// Fungsi User ketika login
export const loginUser = (userData, History) => (dispatch) => {
    const API = "https://travelook.gabatch11.my.id/auth/signin"
    // const API = "https://asia-southeast1-loginreg-api-wts.cloudfunctions.net/api/signin"
    dispatch({ type: LOADING_UI}); 
    axios.post(API, userData)
        .then((res)=>{
            setAuthorizationHeader(res.data.token)
            dispatch(getUserData());
            dispatch({type: CLEAR_ERRORS});
            History.push("/");
            
        })
        .catch((err)=>{
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        });
}

export const signupUser = (newUserData, History) => (dispatch) => {
    const API = "https://asia-southeast1-loginreg-api-wts.cloudfunctions.net/api/signup"

    dispatch({ type: LOADING_UI});
    axios.post(API, newUserData)
        .then((res)=>{
            // console.log(res.data);
            setAuthorizationHeader(res.data.token)
            dispatch(getUserData());
            dispatch({type: CLEAR_ERRORS});
            History.push("/"); 
        })
        .catch((err)=>{
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        });
    
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED});
}

//Fungsi mau dapetin data2 user (biasanya buat user profile atau mau cantumin nama di headnav)
export const getUserData = () => (dispatch) => {
    const API = "https://travelook.gabatch11.my.id/auth/"
    // const API = "https://asia-southeast1-loginreg-api-wts.cloudfunctions.net/api/user"
    dispatch({type: LOADING_USER});
    // axios.get('https://asia-southeast1-loginreg-api-wts.cloudfunctions.net/api/user')
    axios.get(API)
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken; // code ini itu pengganti Authorization: Bearer token di postman
}