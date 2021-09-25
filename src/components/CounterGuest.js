import React,{useState} from 'react';
import MyIconButton from '../util/MyIconButton';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

//Icon
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles(theme=>({
    contCounterGuest:{
        // display:'flex'
    },
    upDownButton:{
        width:10,
        height:10
    },
    sizeIcon:{
        width:20,
        height:20
    },
    TextFieldClass:{
        width:'100%'
    },
    formControl: {
        width:'100%',
        paddingTop:35,
      },
    labelStyle:{
        fontSize:14
    }
    
}))

const CounterGuest = () => {
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
         <div>
            <MyIconButton tip="Add guest" onClick={handleAddOne} btnClassName={classes.upDownButton}>
                <ArrowDropUpIcon className={classes.sizeIcon}/>
            </MyIconButton>
            <MyIconButton tip="Substract guest" onClick={handleMinusOne} btnClassName={classes.upDownButton}>
                <ArrowDropDownIcon className={classes.sizeIcon}/>
            </MyIconButton>
        </div>
     )

    return ( 
        <div className={classes.contCounterGuest}>
            {/**FormControl hanya buat mengatur paddingTop inputLabel karena label tidak ditaruh didalem textField */}
            <FormControl className={classes.formControl}> 
                <InputLabel className={classes.labelStyle} id="guest">Guest</InputLabel>
                <TextField
                    id="guest"
                    name="guest"
                    type="text"
                    labelid="guest"
                    value={`${count} Guest`}
                    fullWidth // Fullwidth harus diaktifkan ketika mau mengaktifkan lebar
                    className={classes.TextFieldClass}
                    InputProps={{ // inputProps digunakan untuk memasukan elemen kedalam textField
                        endAdornment: onlyButtons,
                    }}
                />
            </FormControl>
        </div>
     );
}
 
export default CounterGuest;
