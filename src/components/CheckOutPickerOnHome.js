import React,{useState,forwardRef} from 'react';
import DatePicker2 from 'react-datepicker';
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

const CheckOutPickerOnHome = () => {
    const classes = useStyles();
    const [endDate, setEndDate] = useState(new Date());

    let newDateFormat = dayjs(endDate).format('YYYY/MM/DD')
    // const [endDate, setEndDate] = useState(null);

    // let btns = document.querySelectorAll('button');

    // btns.forEach(function (i) {
    //     i.addEventListener('click', function() {
    //         document.getElementById('aaa').focus();
    //     });
    //   });

    const klik = ()=>{
        document.getElementById('aaa').focus();
    }

    console.log('date check out', newDateFormat)
    

    return ( 
        <div>
            <li className={classes.titleLi}>Check Out Date</li>
            <div style={{position:'absolute', left:'8%',right:'15%'}}>
                <DatePicker2 
                    id="aaa"
                    dateFormat="yyyy/MM/dd"
                    // dateFormat="dd/MM/yyyy"
                    selected={endDate} 
                    onChange={(date) => setEndDate(date)} 
                    closeOnScroll={true}
                    placeholderText='Enter your date'

                    peekNextMonth
                    showMonthDropdown     
                    showYearDropdown
                    dropdownMode="select"
                    className={classes.styleDatePicker}
                    />
                <button style={{position:'absolute', top:4, right:0, backgroundColor:'transparent',border:'none'}} onClick={klik} >
                    <EventIcon style={{color:'orangered'}} />
                </button>
            </div>
            
        </div>
     );
}
 
export default CheckOutPickerOnHome;