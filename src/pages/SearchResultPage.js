import React,{useEffect,useState} from 'react';
import ResultSearchBanner from '../components/underResultSearchPage/ResultSearchBanner';
import '../css/BackgroundSearchPage.css'

//MaT UI 
import {makeStyles} from '@material-ui/core/styles';
import ResultSearchContent from '../components/underResultSearchPage/ResultSearchContent';

//Redux
import{useSelector} from 'react-redux';

const useStyles = makeStyles(theme=>({

}))

const SearchResultPage = () => {
    const classes = useStyles();
    const {dataHotelByOneCityLocation} = useSelector (state => state.data);
    const [hotelBasedOnCityLocation,setHotelBasedOnCityLocation] = useState([])
    console.log('hotel by city location',dataHotelByOneCityLocation )

    // useEffect(()=>{
        // setHotelBasedOnCityLocation(
        //     dataHotelByOneCityLoaction.map((hotelByLoc,i)=>{
        //         return(
        //             hotelByLoc
        //         )
        //     })
        // )
        // console.log('hotel by city location',dataHotelByOneCityLoaction )
    // },[])
    return ( 
        <div>
            <ResultSearchBanner/>
            <ResultSearchContent/>
        </div>
     );
}
 
export default SearchResultPage;