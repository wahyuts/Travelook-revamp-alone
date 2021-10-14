import React from 'react';
//Mat UI Stuff
import {makeStyles} from '@material-ui/core/styles';
//Redux 
import{useDispatch,useSelector} from 'react-redux';


const useStyles = makeStyles(theme=>({
    contNavCardHotel:{
        marginBottom:'2%',
        width:'95%',
        height: '6%',
        position:'absolute',
        // backgroundColor: 'orange',
        backgroundColor: 'transparant',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        '& .divButton': {
            width:180,
            height:30,
            border: '2px solid orange',
            borderRadius: 10,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginLeft:5,
            marginRight:5,
            cursor:'pointer',
            backgroundColor:'rgba(255, 255, 255, 0.4);'
        },
        '& .divButton:hover':{
            border: '2px solid red',
        }
    },
    divSort:{
        width:180,
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    divReset:{
        width:180,
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer'
    },
    // divButton:{
    //     width:180,
    //     height:30,
    //     border: '2px solid orange',
    //     borderRadius: 10,
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     marginLeft:5,
    //     marginRight:5,
    //     cursor:'pointer',
    //     backgroundColor:'rgba(255, 255, 255, 0.4);'
    // }
}))

const NavOnCardHotel = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.contNavCardHotel}>
            <div className={classes.divSort}>
                <p>Sort by</p>
            </div>
            <div className="divButton">
                <p>Most Popular</p>
            </div>
            <div className="divButton">
                <p>Highest Rating</p>
            </div>
            <div className="divButton">
                <p>Lowest Price</p>
            </div>
            <div className={classes.divReset} >
                <p>Reset</p>
            </div>
        </div>
     );
}
 
export default NavOnCardHotel;