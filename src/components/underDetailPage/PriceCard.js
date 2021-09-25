import React from'react';
import CheckInDatePicker from '../CheckInDatePicker';
import CheckOutDatePicker from '../CheckOutDatePicker';
import CounterGuest from '../CounterGuest';

//MaT UI Stuff
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    contCard:{
        position:'absolute',
        width:'85%',
        right:0,
        backgroundColor:'rgba(255, 255, 255, 0.7); ',
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10,
        [theme.breakpoints.down('sm')]: {
            width:'100%',
        },
    },
    detailCard:{
        width:'90%',
        // backgroundColor:'brown', 
        display:'flex', 
        flexDirection:'column',
        '& .BookNowButton':{
            height: 50,
            width: '100%',
            marginTop:10,
            marginBottom:10,
            fontSize:18,
            textTransform: 'none',
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        }
    },
    detailPriceInfo:{
        display:'flex',
        justifyContent:'space-between',
        fontSize:15
    },
    hrStylePriceCard:{
        borderBottom: '1px solid #E1E1E1', 
        marginTop:10,
        marginBottom:10
    },
    priceRoomXnight:{
        width:200,
        [theme.breakpoints.down('sm')]: {
            fontSize:13, 
        },
    },
    serviceFee:{
        marginTop:0,
        width:200,
        [theme.breakpoints.down('sm')]: {
            width:200,
            fontSize:13, 
        },
    },
    IDR1:{
        marginRight:5,
        marginLeft:12,
        [theme.breakpoints.down('sm')]: {
            fontSize:13, 
        },
    },
    IDR2:{
        marginTop:0,
        marginRight:5,
        marginLeft:12,
        [theme.breakpoints.down('sm')]: {
            fontSize:13, 
        },
    },
    nominalPrice:{
        [theme.breakpoints.down('sm')]: {
            fontSize:13, 
        },
    },
    nominalPriceServiceFee:{
        marginTop:0,
        // width:71,
        textAlign:'right',
        [theme.breakpoints.down('sm')]: {
            fontSize:13, 
        },
    }
}))

const PriceCard = () => {

    const classes = useStyles();
    return ( 
        <div className={classes.contCard}>
            <div className={classes.detailCard}> 
                <p>IDR 500.000 / Night</p>
                <CheckInDatePicker/>
                <CheckOutDatePicker/>
                <CounterGuest/>
                <Button className="BookNowButton">
                    Book Now
                </Button>
                <div style={{width:'100%'}}>
                    <div className={classes.detailPriceInfo}>
                        <p className={classes.priceRoomXnight}>Price Room x 3 Nights</p>
                        <p className={classes.IDR1}>IDR</p>
                        <p className={classes.nominalPrice}>1.500.000</p>
                    </div>
                    <div className={classes.detailPriceInfo} >
                        <p className={classes.serviceFee}>Service Fee</p>
                        <p className={classes.IDR2}>IDR</p>
                        <p className={classes.nominalPriceServiceFee}>250.000</p>
                    </div>
                    <hr className={classes.hrStylePriceCard}/>
                    <div className={classes.detailPriceInfo}>
                        <p className={classes.priceRoomXnight}>Total</p>
                        <p className={classes.IDR1}>IDR</p>
                        <p className={classes.nominalPrice}>1.750.000</p>
                     </div>
                </div>
            </div>
        </div>
     );
}
 
export default PriceCard;