import React,{useState} from 'react';
import MyIconButton from '../util/MyIconButton';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

//Icon
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles(theme=>({
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
        left:'8%', 
        width:'90%'
    },
    styleInput: {
        width:'100%',
        height:25,
        paddingLeft: 10,
        marginRight: 10,
        border:'1px solid orangered',
        borderRadius:5
      },
    labelStyle:{
        fontSize:14,
        marginTop:4,
        marginLeft:15,
        marginBottom:6
    }
    
}))

const CounterGuestOnHome = () => {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const handleMinusOne = () => {
        count === 0 ? (
            setCount(0)
        ):(
            setCount(count - 1)
        )
     }
    const handleAddOne = () => {
        setCount(count + 1)
     }

     let onlyButtons = (
         <div style={{display:'flex',position:'absolute',right:20,top:5}}>
            <MyIconButton tip="Add guest" onClick={handleAddOne} btnClassName={classes.upDownButton}>
                <ArrowDropUpIcon className={classes.sizeIcon}/>
            </MyIconButton>
            <MyIconButton tip="Substract guest" onClick={handleMinusOne} btnClassName={classes.upDownButton}>
                <ArrowDropDownIcon className={classes.sizeIcon}/>
            </MyIconButton>
        </div>
     )

    return ( 
        
        <div>
            <InputLabel className={classes.labelStyle} id="guest">Guest</InputLabel>
            <div className={classes.contDivStyle}>
                <input
                    name="guest"
                    value={`${count} Guest`}
                    style={{width:'14vw'}}
                    className={classes.styleInput}
                    readOnly
                />
                    {onlyButtons}
            </div>
            
        </div>
     );
}
 
export default CounterGuestOnHome;