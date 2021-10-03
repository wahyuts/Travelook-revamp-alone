import React from "react";
// Karena kita mengunakan package datapicker dari syncfusion maka untuk menstyle ulang styling komponennya
// harus menggunakan method traditional standar external css
import '../css/datePicker.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    titleLi:{
        listStyle:'none', 
        fontSize:14, 
        marginBottom:15,
        fontWeight:400,
        color:'grey'
    }
}))

const CheckOutDatePicker = (props) => {
    const classes = useStyles();
  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
  const customClass = 'e-calendar-blue';
  return(
      <div>
          <li className={classes.titleLi}>Check-out</li>
          <DatePickerComponent
                cssClass={customClass}
                placeholder="Enter your check in date"
                value={dateValue} 
                format="dd-MM-yyyy"
                width="100%"
                start="Date" 
                // depth="Year"
          >
          </DatePickerComponent>
      </div>
  )
}

export default CheckOutDatePicker;