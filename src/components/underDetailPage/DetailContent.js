import React from 'react';
import CommentCard from './CommentCard';
import LocationMap from './LocationMap';
import About from './About';
import PriceCard from './PriceCard';
import ShowAllAnemitiesDialog from './ShowAllAnemitiesDialog';

//MaT UI Stuff
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme =>({
    contGlobal:{
        position:'relative',
        display:'flex',
        // flexDirection:'column',
        justifyContent:'center', 
        alignItems:'flex-start',
        height:1700,
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
        height:1700, 
        // height:'122vw',
        // backgroundColor:"red"
        // backgroundColor:theme.palette.common.whiteButtonBackground,
        backgroundColor:"transparant",
        [theme.breakpoints.down('sm')]: {
            height:1500, 
        },
    },
    colorGrid:{
        // backgroundColor:theme.palette.common.whiteButtonBackground
        backgroundColor:"transparant",
        // backgroundColor:"brown",
    },
    colorGridPriceCard:{
        backgroundColor:"transparant",
        // backgroundColor:theme.palette.common.whiteButtonBackground,
        position:'relative'
    },
    titleHotel:{
        fontSize:25,
        marginTop:0,
        marginBottom:10,
        [theme.breakpoints.down('sm')]: {
            marginTop:10,
            fontSize:16
        },
    },
    li2Guest:{
        marginRight:15, 
        listStyle:'none',
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        },
    },
    liOnContent:{
        marginRight:15,
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        },
    },
    liOnContentAnemities:{
        marginLeft:15,
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        },
    },
    justLi:{
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        },
    },
    justLi2:{
        listStyle:'none',
        [theme.breakpoints.down('sm')]: {
            listStyle:'none',
            fontSize:12
        },
    },
    titleAmenitiesAndMap:{
        fontSize:20,
        marginTop:20,
        marginBottom:20,
        [theme.breakpoints.down('sm')]: {
            fontSize:15
        },
    },
    titleReviewsAndAbout:{
        fontSize:20,
        marginTop:20,
        marginBottom:20,
        [theme.breakpoints.down('sm')]: {
            fontSize:15
        },
    },
    hrStyle:{
        borderBottom: '1px solid #E1E1E1', 
        marginTop:30
    },
    hrStyleLast:{
        borderBottom: '1px solid #E1E1E1', 
        marginTop:30,
        marginBottom:30
    }

}))


const DetailContent = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.contGlobal}>
            <section className={classes.contSection}>
                <Grid container spacing={5} className={classes.contFullGrid}>
                    <Grid item sm={8} xs={12} className={classes.colorGrid}>
                        <h3 className={classes.titleHotel}>Cozy Apartment In Center Bandung</h3>
                        <div style={{display:'flex'}}>
                            <li className={classes.li2Guest}>2 guest</li>
                            <li className={classes.liOnContent}>1 bedroom</li>
                            <li className={classes.liOnContent}>1 bed</li>
                            <li className={classes.justLi}>1 bathroom</li>
                        </div>
                        <hr className={classes.hrStyle}/>
                        <h4 className={classes.titleAmenitiesAndMap}> Amenities</h4>

                        <Grid container>
                            <Grid item sm={6} xs={12}>
                                <div>
                                    <li className={classes.justLi2}>Bathroom</li>
                                    <li className={classes.liOnContentAnemities}>Hairdryer</li>
                                    <li className={classes.liOnContentAnemities}>Shampoo & Shower gel</li>
                                    <li className={classes.liOnContentAnemities}>Hot water</li>
                                </div>
                                <div style={{marginTop:20,marginBottom:20}}>
                                    <li className={classes.justLi2}>Entertainment</li>
                                    <li className={classes.liOnContentAnemities}>TV</li>
                                </div>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <div style={{marginBottom:20}}>
                                    <li className={classes.justLi2}>Bedroom & Laundry</li>
                                    <li className={classes.liOnContentAnemities}>Iron</li>
                                    <li className={classes.liOnContentAnemities}>Washer & Hangers</li>
                                </div>
                                <div>
                                    <li className={classes.justLi2}>Internet & Office</li>
                                    <li className={classes.liOnContentAnemities}>WiFi</li>
                                </div>
                            </Grid>
                        </Grid>
                        <ShowAllAnemitiesDialog/>
                        <hr className={classes.hrStyle}/>
                        <h4 className={classes.titleAmenitiesAndMap}> Location</h4>
                        <LocationMap/>
                        <hr className={classes.hrStyle}/>
                        <h4 className={classes.titleReviewsAndAbout}> Reviews</h4>
                        <CommentCard/>
                        <hr className={classes.hrStyle}/>
                        <h4 className={classes.titleReviewsAndAbout}> About</h4>
                        <About/>
                        <hr className={classes.hrStyleLast}/>     
                    </Grid>

                    <Grid item sm={4} xs={12} className={classes.colorGridPriceCard} >
                        <PriceCard/>
                    </Grid>
                </Grid>  
            </section>
            
        </div>
     );
}
 
export default DetailContent;