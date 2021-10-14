import React from 'react';
//Mat UI Stuff
import {makeStyles} from '@material-ui/core/styles';
//Redux 
import{useDispatch,useSelector} from 'react-redux';


const useStyles = makeStyles(theme=>({
    rat:{
        display:'flex',
        alignItems:'center',
        marginBottom:15
    }
}))

const StateLocation = ({onChecking}) => {
    const classes = useStyles();
    const {dataHotelByOneCityLocation} = useSelector (state => state.data);

    //Mendapatkan daftar lokasi state hotel secara aray grup,..cth [a,a,a,b,b,c,d,d]
    const ArrGroupStateLocationHotel = dataHotelByOneCityLocation.map((hotels,i)=>{
        return(
            hotels.location.state
        )
    })

    //Pake method new Set untuk menyaring nilai yang sama pada array
    const locationStateHotel = [...new Set(ArrGroupStateLocationHotel)]
    console.log("state hotel",locationStateHotel)

    const menuStateLocation = locationStateHotel.map((locationState,i)=>{

        return(
            <div className={classes.rat} >
                <input type="checkbox" name="locate" value={locationState} onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}} /><span style={{marginLeft:10,marginBottom:2}}>{locationState}</span>
            </div>
        )
    })

    return ( 
        <div>
            {menuStateLocation}
        </div>
     );
}
 
export default StateLocation;