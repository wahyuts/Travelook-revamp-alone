import {LOADING_DATA,GET_ALL_DATA_HOTEL,SET_LOCATION_EACH_HOTEL,GET_HOTEL_BY_LOCATION,RESET_LOCATION} from '../type';

const initialState = {
    dataHotels: [],
    dataHotelByOneCityLoaction:[],
    textInSearchBox: '',
    uniqArrayLocation: [],
    locationEachHotel:'Choose Destination',
    loading: false
}

export default function (state=initialState, action) {
    switch (action.type){
        case LOADING_DATA:
            return{
                ...state,
                loading:true
            }
        case GET_ALL_DATA_HOTEL:
            return{
                ...state,
                dataHotels: action.payload,
                loading: false
            }
        case SET_LOCATION_EACH_HOTEL:
            return{
                ...state,
                locationEachHotel: action.payload
            }
        case GET_HOTEL_BY_LOCATION:
            return{
                ...state,
                dataHotelByOneCityLoaction: action.payload
            }
        case RESET_LOCATION:
            return{
                ...state,
                locationEachHotel: 'Choose Destination'
            }
        default:
            return state;
    }
}
