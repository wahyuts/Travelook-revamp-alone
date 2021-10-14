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
        backgroundColor: 'orange',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    divSortAndReset:{
        width:180,
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    divButton:{
        width:180,
        height:30,
        border: '1px solid black',
        borderRadius: 10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        marginRight:5,
        cursor:'pointer'
    }
}))

const NavOnCardHotel = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.contNavCardHotel}>
            <div className={classes.divSortAndReset}>
                <p>Sort by</p>
            </div>
            <div className={classes.divButton}>
                <p>Most Popular</p>
            </div>
            <div className={classes.divButton}>
                <p>Highest Rating</p>
            </div>
            <div className={classes.divButton}>
                <p>Lowest Price</p>
            </div>
            <div className={classes.divSortAndReset}>
                <p>Reset</p>
            </div>
        </div>
     );
}
 
export default NavOnCardHotel;