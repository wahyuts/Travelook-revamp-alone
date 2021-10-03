import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { setBudget } from '../../actions/auth';

// import SliderPrice from './SliderPrice';
// import './PriceRange.css'
// import './colors.css'
// import './background-colors.css'

//MaT UI Stuff
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

//   function valuetext(value) {
//     return `${value}`;
//   }

const useStyles = makeStyles(theme=>({
    fullGrid:{
        width:'98%'
    },
    gridMinPrice:{
        display:'flex',
        justifyContent:'center',
        // backgroundColor:"purple",
    },
    gridMaxPrice:{
        display:'flex',
        justifyContent:'center',
        // backgroundColor:"brown",
    },
    contDivSlider:{
        marginRight:0,
        width:'96%'
    },
    sliderOnly:{
        color:"#EDA3B5", 
        width:'100%'
    },
    divMinMaxPrice:{
        position:'relative',
        width:'100%',
        '& .aturlebar':{
            width:'90%',
            height:25,
            border:'2px solid #E5E5EA',
            marginTop:10,
            borderRadius: 8,
            paddingLeft:10,
            fontSize:12
        }
    },
    fontPMax:{
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 1
    },
    pMargin:{
        position:'absolute',
        top:0,
        left:'37%',
        marginTop: 17,
        marginLeft: 15,
        marginRight: 15
    }
}))


const PriceRange = () => {
    const classes = useStyles();
    // const dispatch = useDispatch();

    const [valuex, setValuex] = React.useState([0, 1500000]);

    // const { getBudget } = useSelector(state => state.redBudget || []);


    const handleChange = (event, newValue) => {
        // dispatch(setBudget(newValue));
        setValuex(newValue);
    };


// koding convert integer to string agar bisa jadi tipe rupiah di textboxnya,..khusus yang ini bagian low budget nya
    // let lowBudget = getBudget[0]
    let lowBudget = valuex[0]


    let number_string = lowBudget.toString(),
          sisa = number_string.length % 3,
          rupiah_low_budget = number_string.substr(0, sisa),
          ribuan = number_string.substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah_low_budget += separator + ribuan.join ('.');
    }
//************************************************************************************************ */

// khusus yang ini bagian High budget nya
    // let highBudget = getBudget[1]
    let highBudget = valuex[1]


    let number_stringxx = highBudget.toString(),
        sisaxx = number_stringxx.length % 3,
        rupiah_high_budget = number_stringxx.substr(0, sisaxx),
        ribuanxx = number_stringxx.substr(sisaxx).match(/\d{3}/gi);

    if (ribuanxx) {
        let separatorxx = sisaxx ? '.' : '';
        rupiah_high_budget += separatorxx + ribuanxx.join ('.');
    }

//***************************************************************************************************** */


    return(
        <div className="contprice">
            <div className={classes.contDivSlider}>
                <Slider
                    className={classes.sliderOnly}
                    value={valuex}
                    // value={getBudget}
                    onChange={handleChange}
                    min={0}
                    max={1500000}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                    // getAriaValueText={valuetext}
                />
            </div>

            <div style={{position:'relative'}}>
                <Grid container spacing={5} className={classes.fullGrid}>
                    <Grid item sm={6} xs={12} className={classes.gridMinPrice}>
                        <div className={classes.divMinMaxPrice}>
                            <p className={classes.fontPMax}>Min</p>
                            <input className="aturlebar focus:outline-none" type="textbox" name="lowPrice" value={`IDR ${rupiah_low_budget}`} readOnly/>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.gridMaxPrice}>
                        <div className={classes.divMinMaxPrice}>
                            <p className={classes.fontPMax}>Max</p>
                            <input className="aturlebar focus:outline-none" type="textbox" name="highPrice" value={`IDR ${rupiah_high_budget}`} readOnly />
                        </div>
                    </Grid>
                </Grid>
                {/* <p className={classes.pMargin}>{`<-->`}</p> */}
            </div>
            
            {/* <div className="cont-button-apply">
                <button className="Apply custom-pink-background custom-white hover:bg-pink-500 focus:outline-none">Apply</button>
            </div> */}

        </div>
        
    )
}

export default PriceRange