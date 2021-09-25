import React from 'react';
import LogoBM from '../../images/Travelook-Black-Font.png';  
import PlaystoreLogo from '../../images/playstore_logo.png';
import ApplestoreLogo from '../../images/appstore_logo.png';


//MuI Stuff
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
    contGlobal:{
        // Aktifkan position dan marginTop serta atur nilainya untuk responsive mobile
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'22vw', 
        // backgroundColor:'red',
        backgroundColor:'transparent',
        [theme.breakpoints.down('sm')]: {
            position:'absolute',
            height:'60vw', 
            marginBottom:50,
            bottom:0
        },
    },
    contFooter:{
        display:'flex',
        width:'90%',
        height:200,
        borderBottom: '1px solid grey'
    },
    contFooterLast:{
        width:'90%'
    },
    contLogo:{
        marginLeft:'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end',
        [theme.breakpoints.down('sm')]: {
            marginTop:'5%'
        }
    },
    logoSize:{
        marginBottom:10,
        [theme.breakpoints.down('sm')]: {
            height:32,
            width:100
        }
    },
    logoSizePSAPP:{
        width:42,
        height:42,
        [theme.breakpoints.down('sm')]: {
            height:28,
            width:28
        }
    },
    contAboutExplore:{

    },
    contSupport:{
        marginLeft:'5vw'
    },
    liContentFooter:{
        listStyle:'none',
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        }
    },
    liAvailableOn:{
        listStyle:'none',
        marginBottom:12,
        marginRight:12,
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        }
    },
    textPrivacy:{
        [theme.breakpoints.down('sm')]: {
            fontSize:10
        }
    },
    textTermCondition:{
        marginLeft:'5vw',
        [theme.breakpoints.down('sm')]: {
            fontSize:10
        }
    },
    textCopyright:{
        marginLeft:'auto',
        [theme.breakpoints.down('sm')]: {
            fontSize:10
        }
    }
}))

const Footer = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.contGlobal}>
            <div className={classes.contFooter}>
                <div className={classes.contAboutExplore}>
                    <h4 style={{marginBottom:20}}>About</h4>
                    <li className={classes.liContentFooter}>Explore stays</li>
                </div>
                <div className={classes.contSupport}>
                    <h4 style={{marginBottom:20}}>Support</h4>
                    <li className={classes.liContentFooter}>Help center</li>
                    <li className={classes.liContentFooter}>FAQ</li>
                    <li className={classes.liContentFooter}>Contact us</li>
                </div>
                <div className={classes.contLogo}>
                    <img src={LogoBM} alt="Travelook Logo" className={classes.logoSize}/>
                    <li className={classes.liAvailableOn}>Available on</li>
                    <div style={{display:'flex',marginRight:12}}>
                        <img src={PlaystoreLogo} alt="Playstore Logo" className={classes.logoSizePSAPP}/>
                        <img src={ApplestoreLogo} alt="Applestore Logo" className={classes.logoSizePSAPP}/>
                    </div>
                </div>
            </div>

            <div className={classes.contFooterLast}>
                <div style={{display:'flex'}}>
                    <p className={classes.textPrivacy}>Privacy policy</p>
                    <p className={classes.textTermCondition}>Term & condition</p>
                    <p className={classes.textCopyright}>Copyright 2021. All right reserved</p>
                </div>
            </div>
        
        </div>
        
     );
}
 
export default Footer;