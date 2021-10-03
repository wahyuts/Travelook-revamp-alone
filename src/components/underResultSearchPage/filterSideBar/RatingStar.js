import React, {useState} from 'react';

//MaT UI
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    rat:{
        display:'flex',
        alignItems:'center',
        marginBottom:10
    }
}))

export default function RatingStar({onChecking}) {
  const classes = useStyles();

  const [value5, setValue5] = useState(5);
  const [value4, setValue4] = useState(4);
  const [value3, setValue3] = useState(3);
  const [value2, setValue2] = useState(2);
  const [value1, setValue1] = useState(1);


  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent" style={{paddingLeft:0, marginLeft:0}}>
        <div className={classes.rat}>
            <input type="checkbox" name="rating" value="5" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}} />
            <Rating style={{marginLeft:10, marginTop:4}}name="read-only" value={value5} size="medium" readOnly />
        </div>
        
        <div className={classes.rat}>
            <input type="checkbox" name="rating" value="4" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}} />
            <Rating style={{marginLeft:10, marginTop:4}}name="read-only" value={value4} size="medium" readOnly />
        </div>

        <div className={classes.rat}>
            <input type="checkbox" name="rating" value="3" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}} />
            <Rating style={{marginLeft:10, marginTop:4}}name="read-only" value={value3} size="medium" readOnly />
        </div>

        <div className={classes.rat}>
            <input type="checkbox" name="rating" value="2" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}} />
            <Rating style={{marginLeft:10, marginTop:4}}name="read-only" value={value2} size="medium" readOnly />
        </div>

        <div className={classes.rat}>
            <input type="checkbox" name="rating" value="1" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}} />
            <Rating style={{marginLeft:10, marginTop:4}}name="read-only" value={value1} size="medium" readOnly />
        </div>
        {/* <p><input type="checkbox" name="rating" value="4" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}}/><Rating style={{marginLeft:10}}name="read-only" value={value4} size="medium" readOnly /></p>
        <p><input type="checkbox" name="rating" value="3" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}}/><Rating style={{marginLeft:10}}name="read-only" value={value3} size="medium" readOnly /></p>
        <p><input type="checkbox" name="rating" value="2" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}}/><Rating style={{marginLeft:10}}name="read-only" value={value2} size="medium" readOnly /></p>
        <p><input type="checkbox" name="rating" value="1" onChange={onChecking} defaultChecked={false} style={{cursor: 'pointer'}}/><Rating style={{marginLeft:10}}name="read-only" value={value1} size="medium" readOnly /></p> */}
        
      </Box>
    </div>
  );
}