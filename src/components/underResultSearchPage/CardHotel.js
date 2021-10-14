import React from 'react';
import {Link} from 'react-router-dom';
//Mat UI Stuff
import {makeStyles} from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//Redux 
import{useDispatch,useSelector} from 'react-redux';
import { circle } from 'leaflet';
import Scroll from '../Scroll';


const useStyles = makeStyles(theme=>({
    contMainHotel:{
        width:'98%',
        height: '82.3%',
        position:'absolute',
        top:'8%',
        borderRadius:'2%',

        // height: '90%',
        // backgroundColor: 'orange',
        backgroundColor:'rgba(255, 255, 255, 0.2); ',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2.4%',
    },
    contDivEachHotel:{
        display: 'flex',
        // backgroundColor: 'red',
        backgroundColor:'rgba(192, 209, 211, 0.5); ',
        width:'95%',
        height:'30%',
        marginBottom:10,
        borderRadius:5,
    },
    divOnlyImage:{
        width:'28%',
        height:'100%', 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center'
    },
    imageHotel:{
        width : '95%',
        height: '88%',
        marginLeft:10
    },
    divInformation:{
        width:'50%',
        // backgroundColor:'green',
        backgroundColor:'transparant',
        marginLeft:10
    },
    divInfoPrice:{
        width:'22%',
        backgroundColor:'transparant',
        // backgroundColor:'green',
        marginLeft:10,
        paddingRight:10,
        '& .buttonGoToDetail':{
            height: 50,
            width: 140,
            textTransform: 'none',
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            [theme.breakpoints.down('sm')]: {
                height:30,
                width:70,
                fontSize:10
            }
        }
    },
    // buttonGoToDetail:{
    //     height: 50,
    //     width: 140,
    //     textTransform: 'none',
    //     backgroundColor: theme.palette.common.black,
    //     color: theme.palette.common.white,
    //     [theme.breakpoints.down('sm')]: {
    //         height:30,
    //         width:70,
    //         fontSize:10
    //     }
    // }
}))

const CardHotel = () => {
    const classes = useStyles();
    const {dataHotelByOneCityLocation} = useSelector (state => state.data);
    const cardEachHotel = dataHotelByOneCityLocation.map((hotelInfo,i)=>{
        return(
            <div className={classes.contDivEachHotel} key={i}>
                <div className={classes.divOnlyImage}>
                    <img src={`https://travelook.gabatch11.my.id/${hotelInfo.Media[2].file_name}`} alt="Travelook-preview-hotel" className={classes.imageHotel}/>
                </div>
                <div className={classes.divInformation}>
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
                        <StarIcon style={{color:"orange",marginRight:10}}/>
                        <p style={{margin:0,padding:0}}> {hotelInfo.rating} / 5</p>
                    </div>
                </div>
                <div className={classes.divInfoPrice}>
                    <p>IDR {hotelInfo.price} / Night</p>
                    <Button className="buttonGoToDetail" component={Link} to='/detail_hotel'>
                        More Detail <ArrowForwardIcon style={{marginLeft:5}}/>
                    </Button>
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