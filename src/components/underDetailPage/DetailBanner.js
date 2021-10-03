import React from 'react';
import detailBanner from '../../images/imageDetail.png';

//MuI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//Icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme=>({
    contBanner:{
        //mengatur posisi, lebar, tinggi, kotak hitam
        position: 'relative',
        width: '100%',
        height: '32vw',
        // backgroundColor: theme.palette.common.whiteButtonBackground,
        backgroundColor:'transparant',
        // backgroundColor: theme.palette.common.black,

        //mengatur flex dan padding terhadap gambar
        paddingTop: 100,
        paddingBottom: 20,
        textAlign: 'center',
        display: 'flex',
        justifyContent : 'center',
        [theme.breakpoints.down('sm')]: {
            height: '40vw',
            paddingTop: 90,
        }
    },
    divImgAndText:{
        position: 'absolute',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems:'flex-start'
    },
    divImgAndDivButton:{
        position:'relative',
        width:'87vw',
        height:'28vw'
    },
    divOnlyShowAllButton:{
        position: 'absolute', 
        top:'80%', 
        right:'3%',
        [theme.breakpoints.down('sm')]: {
            top:'65%', 
            right:'3%',
        },
        '& .showAllPhotosBT':{
            height: 50,
            width: 170,
            textTransform: 'none',
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            [theme.breakpoints.down('sm')]: {
                fontSize:12,
                height: 40,
                width: 140,
            }
        }
    },
    pText01:{
        fontSize: 12,
        color: 'black',
    },
    imgBanner:{
        width: '87vw',
        height: '28vw',
        [theme.breakpoints.down('sm')]: {
            height: '32vw',
        }
    },
    // showAllPhotosBT:{
    //     height: 50,
    //     width: 170,
    //     textTransform: 'none',
    //     backgroundColor: theme.palette.common.white,
    //     color: theme.palette.common.black,
    // },
    h1Style:{
        // position: 'absolute',
        paddingTop: 25,
        fontFamily: 'Poppins',
        fontSize: 48,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 8,
            fontSize: 20,
        }
    },
    slogan:{
        position: 'absolute',
        paddingTop :95,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 35,
            fontSize: 10,
        }
    },
    
}))

const DetailBanner = () => {

    const classes = useStyles();
    return ( 
        <div>
            <div className={classes.contBanner}>
                <div className={classes.divImgAndText}>
                    <p className={classes.pText01}>Search Result {'>'} Stylish Room located to Jl.Braga</p>
                    <div className={classes.divImgAndDivButton}>
                        <img src={detailBanner} alt="homepage banner" className={classes.imgBanner}/>
                        <div className={classes.divOnlyShowAllButton}>
                            <Button className="showAllPhotosBT">
                                Show All Photos <ArrowForwardIcon style={{marginLeft:5}}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DetailBanner;