import React from 'react';
import CheckInDatePicker from './CheckInDatePicker';
import CheckOutDatePicker from './CheckOutDatePicker';
import CounterGuest from './CounterGuest';
import CheckInPickerOnHome from './CheckInPickerOnHome';
import CheckOutPickerOnHome from './CheckOutPickerOnHome';
import CounterGuestOnHome from './CounterGuestOnHome';
import {Link,useHistory} from 'react-router-dom';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Redux
import {useDispatch,useSelector} from 'react-redux';
import {getHotelByLocation} from '../redux/actions/dataActions';

//Icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocationOnHome from './LocationOnHome';


const useStyles = makeStyles(theme=>({
    contSearchBox:{
        position:'absolute',
        top:'55%', //Buat media querry dirubah
        witdh:"100%",
        // height:'17%',
        // height:'5.8vw',
        backgroundColor:'white',
        display:'flex'
    },
    contFullGrid:{
        position:'relative',
        width:'70vw',
        height:'6vw'
    },
    disgrid:{
        position:'relative',
        display:'flex',
        borderRight:'3px solid black',
        marginTop:5,
        marginBottom:6
    },
    disgridCounterGuest:{
        position:'relative',
        display:'flex',
        marginTop:5,
        marginBottom:6
    },
    buttonSearch:{
        width:150, 
        backgroundColor:'orangered', 
        display:'flex',
        alignItems:'center'
    },
    signUpButtonBM:{
        height: '100%',
        width: '100%',
        textTransform: 'none',
        backgroundColor: "transparant",
        color: theme.palette.common.white,
        [theme.breakpoints.down('sm')]: {
            height:30,
            width:70,
            fontSize:10
        }
    },

}))


const SearchBox = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {locationEachHotel} = useSelector (state => state.data);

    const goToSearchPage = () =>{
        locationEachHotel === 'Choose Destination' ? (
            alert('Silahkan masukan tujuan anda!')
        ):(
            dispatch(getHotelByLocation(locationEachHotel,history))
        )
    }

    return ( 
        <div className={classes.contSearchBox}>
            <Grid container spacing={5} className={classes.contFullGrid}>
                <Grid item sm={3} xs={12} className={classes.disgrid}>
                    <LocationOnHome/>
                </Grid>
                <Grid item sm={3} xs={12} className={classes.disgrid}>
                    <CheckInPickerOnHome/>
                    {/* <CheckInDatePicker/> */}
                </Grid>
                <Grid item sm={3} xs={12} className={classes.disgrid}>
                    <CheckOutPickerOnHome/>
                    {/* <CheckOutDatePicker/> */}
                </Grid>
                <Grid item sm={3} xs={12} className={classes.disgridCounterGuest} >
                    <CounterGuestOnHome/>
                    {/* <CounterGuest/> */}
                </Grid>
            </Grid>
            <div className={classes.buttonSearch}>
                <Button className={classes.signUpButtonBM} onClick={goToSearchPage}>
                        Search <ArrowForwardIcon style={{marginLeft:5}}/>
                </Button>
            </div>
        </div>
     );
}
 
export default SearchBox;