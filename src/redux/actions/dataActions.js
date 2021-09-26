import axios from 'axios';
import {
    GET_DATA_MOVIE, LOADING_DATA, SET_TEXT_FOR_SEARCHING
} from '../type';

// get data movie
export const getDataMovie = () => dispatch => {
    const API = "https://api.tvmaze.com/search/shows?q=girls"
    // dispatch({ type: LOADING_DATA });
    axios.get(API)
        .then((res)=>{
            dispatch({ 
                type: GET_DATA_MOVIE,
                payload: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
    })
        // .catch((err)=>{
        //     dispatch({
        //         type: GET_DATA_MOVIE,
        //         payload: []
        //     })
        // })
}

//Set text to be used in searchBox component
export const textForSearching = (text) => dispatch => {
    dispatch({
        type: SET_TEXT_FOR_SEARCHING,
        payload: text
    })
}