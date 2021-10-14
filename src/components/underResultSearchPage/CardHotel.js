import React from 'react';
//Mat UI Stuff
import {makeStyles} from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

//Redux 
import{useDispatch,useSelector} from 'react-redux';
import { circle } from 'leaflet';
import Scroll from '../Scroll';


const useStyles = makeStyles(theme=>({
    contMainHotel:{
        width:'98%',
        height: '88%',
        position:'absolute',
        top:'8%',

        // height: '90%',
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2.4%',
        // overflowY:'scroll',
        // overflowX:'hidden'
    },
    contDivEachHotel:{
        display: 'flex',
        backgroundColor: 'red',
        width:'95%',
        height:'25%',
        marginBottom:10,
    },
    imageHotel:{
        width : '95%',
        height: '88%',
        marginLeft:10
    }
}))

const CardHotel = () => {
    const classes = useStyles();
    const {dataHotelByOneCityLocation} = useSelector (state => state.data);
    const cardEachHotel = dataHotelByOneCityLocation.map((hotelInfo,i)=>{
        return(
            <div className={classes.contDivEachHotel} key={i}>
                <div style={{width:'28%',height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={`https://travelook.gabatch11.my.id/${hotelInfo.Media[2].file_name}`} alt="Travelook-preview-hotel" className={classes.imageHotel}/>
                </div>
                <div style={{width:'50%',backgroundColor:'green',marginLeft:10}}>
                    <p>{hotelInfo.location.city},{hotelInfo.location.state}</p>
                    <h3 style={{marginBottom:0}}>{hotelInfo.name}</h3>
                    <div style={{marginTop:0}}>
                        <ul style={{display:'flex',justifyContent:'flex-start',marginTop:1}}>
                            <li style={{paddingRight:30,listStyleType:'circle'}}>{hotelInfo.total_occupancy} Available rooms</li>
                            <li style={{paddingRight:30,listStyleType:'circle'}}>{hotelInfo.total_bedrooms} Bed</li>
                            <li style={{paddingRight:30,listStyleType:'circle'}}>{hotelInfo.total_bathrooms} Bath</li>
                        </ul>
                    </div>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <StarIcon style={{color:"orange"}}/>
                        <p style={{margin:0,padding:0}}> {hotelInfo.rating} / 5</p>
                    </div>
                </div>
                <div style={{width:'22%',backgroundColor:'green',marginLeft:10}}>
                    <p>IDR {hotelInfo.price} / Night</p>
                </div>
            </div>
        )
    })

    //Logic apakah komponennya menggunakan scroll atau tidak
    const finalCardEachHotel = dataHotelByOneCityLocation.length >= 4 ? (
        <Scroll>
            {cardEachHotel}
        </Scroll>
    ):(
        cardEachHotel
    )
      
    return (
        <div className={classes.contMainHotel}>
            {finalCardEachHotel}
            {/* {cardEachHotel} */}
        </div>
     );
}
 
export default CardHotel;