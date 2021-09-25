import React from 'react';
import homeBanner from '../../images/homepage-banner.png';

//MuI Stuff
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    contBanner:{
        //mengatur posisi, lebar, tinggi, kotak hitam
        position: 'relative',
        width: '100%',
        height: '32vw',
        backgroundColor: theme.palette.primary.main,

        //mengatur flex dan padding terhadap gambar
        paddingTop: 130,
        textAlign: 'center',
        display: 'flex',
        justifyContent : 'center',
        [theme.breakpoints.down('sm')]: {
            height: '40vw',
            paddingTop: 90,
        }
    },
    imgBanner:{
        position: 'absolute',
        width: '87vw',
        height: '28vw',
        [theme.breakpoints.down('sm')]: {
            height: '32vw',
        }
    },
    h1Style:{
        position: 'absolute',
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
    }
}))

const HomeBanner = () => {

    const classes = useStyles();
    return ( 
        <div>
            <div className={classes.contBanner}>
                <img src={homeBanner} alt="homepage banner" className={classes.imgBanner}/>
                <h1 className={classes.h1Style}>Where's Next ?</h1>
                <p className={classes.slogan}>Connecting you to new experience</p>
                {/**di sini isi komponen search box nya */}
            </div>
        </div>
     );
}
 
export default HomeBanner;