import React,{useState,useEffect} from 'react';
import MyIconButton from '../util/MyIconButton';
import {setLocationHotel,setUniqArrayLocation} from '../redux/actions/dataActions';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

//rEDUX
import {useDispatch,useSelector} from 'react-redux';

//Icon
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme=>({
    labelStyle:{
        fontSize:14,
        marginTop:4,
        marginLeft:20,
        marginBottom:6
    },
    upDownButton:{
        width:10,
        height:10,
    },
    sizeIcon:{
        width:20,
        height:20
    },
    contDivStyle:{
        position:'absolute', 
        left:'10%', 
        width:'90%'
    },
    contOnlyButton:{
        display:'flex',
        position:'absolute',
        right:20,
        top:5
    },
    styleInput: {
        width:'100%',
        height:25,
        paddingLeft: 10,
        marginRight: 10,
        border:'1px solid orangered',
        borderRadius:5
      },
    dropdownContent:{
        position:'absolute',
        top: '110%',
        zIndex:1,
        left: 0,
        padding:10,
        backgroundColor: '#fff',
        boxShadow: '3px 3px 10px 6px rgba(0, 0, 0, 0.06)',
        fontWeight:500,
        color:'#333',
        width: '80%',
        '& .dropdown-item':{
            padding: 10,
            cursor: 'pointer',
            fontSize:14,
            transition: 'all 0.2s',
            color:'red',
            textAlign:'left'
        },
        '& .dropdown-item:hover':{
            backgroundColor: '#f4f4f4'
        }
    }

}))

const LocationOnHome = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    // const [selected, setSelected] = useState("Choose Destination");
    const [isActive, setIsActive] = useState(false);
    const {dataHotels} = useSelector (state => state.data);
    const {locationEachHotel} = useSelector (state => state.data);

    //Mendapatkan daftar lokasi hotel secara aray grup,..cth [bali,bali,bali,jakarta,jakarta,bandung]
    const ArrGrouplocationHotel = dataHotels.map((hotels,i)=>{
        return(
            hotels.location.city
        )
    });

    //Pake method new Set untuk menyaring nilai yang sama pada array
    const locationHotel = [...new Set(ArrGrouplocationHotel)]
    
    
    const klikme=()=>{
        setIsActive(!isActive)
    }

    const handleClose=()=>{
        setIsActive(false)
    }

    const handleChange = () =>{
        dispatch(setLocationHotel(locationEachHotel))
    }
    
    const menuItemDropDown = (
        isActive && (
            <div className={classes.dropdownContent}>
            {locationHotel.map((locHotel) => (
                <div
                    onClick={(e) => {
                        dispatch(setLocationHotel(locHotel))
                        setIsActive(false);
                    }}
                    className="dropdown-item"
                >
                    {locHotel}
                </div>
            ))}
            </div>
        )
    )

    {console.log("print lokasi setiap hotel",locationEachHotel)}

    return ( 
        <div>
            <InputLabel className={classes.labelStyle}>Destination</InputLabel>
            
            <div className={classes.contDivStyle}>
                <div className={classes.contOnlyButton}>
                    <MyIconButton tip="Menu Location" onClick={klikme} btnClassName={classes.upDownButton}>
                        <ArrowDropDownIcon className={classes.sizeIcon}/>
                    </MyIconButton>
                </div>
                <input
                    name="guest"
                    value={locationEachHotel}
                    // value={selected}
                    onChange={handleChange}
                    style={{width:'13vw',marginRight:18}}
                    className={classes.styleInput}
                    readOnly
                />
                {menuItemDropDown}
                {/* {menuDropDown} */}
            </div>
        </div>
     );
}
 
export default LocationOnHome;