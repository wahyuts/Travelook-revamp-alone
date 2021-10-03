import React,{useState,forwardRef} from 'react';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';

//MaT UI
import {makeStyles} from '@material-ui/core/styles';

//Icons
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(theme=>({
    contDatePicker:{
        position:'absolute', 
        left:'8%'
    },
    titleLi:{
        width:'100%',
        marginLeft:'16%',
        listStyle:'none', 
        fontSize:14, 
        marginBottom:5,
        fontWeight:400,
        color:'grey'
    },
    styleDatePicker:{
        height:25,
        width:'100%',
        paddingLeft:10,
        border:'1px solid orangered',
        borderRadius:5
    }
}))

const CheckInPickerOnHome = () => {
    const classes = useStyles();
    const [startDate, setStartDate] = useState(new Date());
    // const [startDate, setStartDate] = useState(null);
    let newCheckInDateFormat = dayjs(startDate).format('YYYY/MM/DD')
    console.log('cekin',newCheckInDateFormat)
    
    const klik = ()=>{
        document.getElementById('focus-input').focus();
    }
    
    return ( 
        <div>
            <li className={classes.titleLi}>Check In Date</li>
            <div style={{position:'absolute', left:'8%',right:'15%'}}>
                <DatePicker 
                    id="focus-input"
                    dateFormat="yyyy/MM/dd"
                    // dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)} 
                    closeOnScroll={true}
                    placeholderText='Enter your date'

                    peekNextMonth
                    showMonthDropdown     
                    showYearDropdown
                    dropdownMode="select"
                    className={classes.styleDatePicker}

                    />
                    <button style={{position:'absolute', top:4, right:0, backgroundColor:'transparent',border:'none'}} onClick={klik} >
                        <EventIcon style={{color:'orangered'}}/>
                    </button>
            </div>
            
        </div>
     );
}
 
export default CheckInPickerOnHome;