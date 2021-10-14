import React from 'react';
import PriceRange from '../underResultSearchPage/filterSideBar/PriceRange';
import RatingStar from '../underResultSearchPage/filterSideBar/RatingStar';
import FilterBoxSidebar from './filterSideBar/FilterBoxSidebar';

 
//MaT UI
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

//Redux
import{useSelector} from 'react-redux';
import StateLocation from './filterSideBar/StateLocation';
import CardHotel from './CardHotel';
import NavOnCardHotel from './NavOnCardHotel';

const useStyles = makeStyles(theme=>({
    contGlobal:{
        position:'relative',
        display:'flex',
        // flexDirection:'column',
        justifyContent:'center', 
        alignItems:'flex-start',
        height:800,
        [theme.breakpoints.down('sm')]: {
            height:2000,
            paddingBottom:'40vw' // untuk ngatur jarak antara Detail content dengan footer
        },
    },
    contSection:{
        width: '87vw', 
        marginBottom:60
    },
    contFullGrid:{

        // RUBAH NILAI HEIGHT JADI > 1700 UNTUK CODE RESPONSIVE NAMPILIN CARD PRICE DI MOBILE
        // height:1700, 
        // height:'122vw',
        // backgroundColor:"red"
        // backgroundColor:'black',
        backgroundColor:"transparant",
        [theme.breakpoints.down('sm')]: {
            height:1500, 
        },
    },
    gridListHotel:{
        // backgroundColor:theme.palette.common.whiteButtonBackground
        // backgroundColor:"transparant",
        position:'relative',
        backgroundColor:"transparant",
        // backgroundColor:"blue",
    },
    gridFilter:{
        position:'relative',
        display:'flex',
        backgroundColor:"transparant",
        // backgroundColor:"brown",
    }
}));


const ResultSearchContent = () => {
    const classes = useStyles();
    const {locationEachHotel} = useSelector (state => state.data);

    const items = [
        { name: 'filter', 
          label: 'Filter',
        },
    
        { name: 'price', 
          label: 'Price',
          items: [
                  {name:'rangeHarga', label:<PriceRange/>},
                //   {name:'rangeHarga', label:'price'},
              ] 
        },
    
        { name: 'location', 
        //   label: `Location on`,
          label: `Location on ${locationEachHotel}`,
          items: [
                {name:'starRating', label:<StateLocation/>},
            ] 
        },
    
        { name: 'rating', 
          label: 'Rating',
          items: [
            {name:'starRating', label:<RatingStar/>},
          ] 
        },
    
      ]

    return (
        <div className={classes.contGlobal}>
            <section className={classes.contSection}>
                <Grid container spacing={5} className={classes.contFullGrid}>
                    <Grid item sm={4} xs={12} className={classes.gridFilter}>
                           <FilterBoxSidebar items={items}/>
                    </Grid>

                    <Grid item sm={8} xs={12} className={classes.gridListHotel} >
                    {/* <insideFilterBox/> */}
                        <NavOnCardHotel/>
                        <CardHotel/>
                    </Grid>
                </Grid>  
            </section>
            
        </div>
     );
}
 
export default ResultSearchContent;