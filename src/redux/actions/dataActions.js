import axios from 'axios';
import {
    GET_ALL_DATA_HOTEL, LOADING_DATA, SET_TEXT_FOR_SEARCHING, SET_LOCATION_EACH_HOTEL,GET_HOTEL_BY_LOCATION
} from '../type';

// get data movie
export const getAllDataHotel = () => dispatch => {
    const API = "https://travelook.gabatch11.my.id/room"
    // dispatch({ type: LOADING_DATA });
    axios.get(API)
        .then((res)=>{
            dispatch({ 
                type: GET_ALL_DATA_HOTEL,
                payload: res.data.data
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

// Set to one city location from hotel(only one) example:  jakarta or bali or lampung 
export const setLocationHotel = (selected) => dispatch => {
    dispatch({
        type : SET_LOCATION_EACH_HOTEL,
        payload : selected 
    })
}

//Get hotel by city location
export const getHotelByLocation = (text,history) => dispatch => {
    const API = "https://travelook.gabatch11.my.id/room/loc?loc="
    axios.get(`${API}${text}`)
        .then((res)=>{
            dispatch({
                type: GET_HOTEL_BY_LOCATION,
                payload: res.data.data
            })
            history.push('/search_result')
        })
        .catch((err)=>{
            console.log(err)
        })
}


