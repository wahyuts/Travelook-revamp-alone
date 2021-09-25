import React from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import Logo from '../../images/Logo.png';
import LogoBM from '../../images/Travelook-Black-Font.png';
import SearchBox from '../SearchBox';
import {Desktop,Tablet,Mobile,Default} from '../../util/ReactResponsiveHook';

//MaT UI Stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme=>({
    toolbar:{
        height: 85
        
    },
    image:{
        marginLeft: '5%',
        marginRight: 20,
        [theme.breakpoints.down('sm')]: {
            marginRight: 'auto',
            marginLeft: '5%',
            height:40,
            width:130
        }
    },
    imageBM:{
        marginLeft: '13%',
        marginRight: 20,
        [theme.breakpoints.down('sm')]: {
            marginRight: 'auto',
            marginLeft: '5%',
            height:32,
            width:100
        },
        [theme.breakpoints.up('fullHD')]: {
            marginRight: 'auto',
            marginLeft: '14.5%',
            height:60,
            width:210
        }
    },
    buttonDiv:{
        marginLeft: 'auto',
        marginRight: '5.8%',
        [theme.breakpoints.down('sm')]: {
            marginRight: '5%'
        },
        '& .signUpButton':{
            height: 50,
            width: 140,
            textTransform: 'none',
            backgroundColor: theme.palette.common.whiteButtonBackground,
            color: theme.palette.common.black,
            [theme.breakpoints.down('sm')]: {
                height:30,
                width:70,
                fontSize:10
            }
        },
        '& .signInButton':{
            textTransform: 'none',
            color: theme.palette.common.white,
            marginRight: 20
        },
        '& .signUpButtonBM':{
            height: 50,
            width: 140,
            textTransform: 'none',
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            [theme.breakpoints.down('sm')]: {
                height:30,
                width:70,
                fontSize:10
            }
        },
        '& .signInButtonBM':{
            textTransform: 'none',
            color: theme.palette.common.black,
            marginRight: 20
        }
    },
    logoAndSearchBox:{
        display: 'flex', 
        alignItems:'center',
        width:500, 
        marginLeft:0,
        [theme.breakpoints.up('fullHD')]: {
            width:700
        }
    },
    menuIcon:{
        color: 'white',
        marginRight: '5%'
    }
}))


const HeadNav = () => {
    const classes= useStyles();
    const history = useHistory();
    const location = useLocation();
    console.log('Lokasi saat ini',location.pathname);

    const imageClick = () => {
        history.push('/detail_hotel')
    }

    let logos= location.pathname === "/" || location.pathname === '/search_result' ? (
        <img src={Logo} alt="travelook logo" className={classes.image} onClick={imageClick}/>
    ) : (
        <div className={classes.logoAndSearchBox}>
            <img src={LogoBM} alt="travelook logo" className={classes.imageBM} onClick={imageClick}/>
            <SearchBox/>
        </div>
    )

    // Logic, jika auth=false, loading=false maka tampilkan buttontb dengan login dan signup button
    // jika auth=true, loading=false maka tampilkan username dan logout
    let buttonTB= location.pathname === "/" ? (
        <div className={classes.buttonDiv}>
                    <Button className="signInButton" component={Link} to='/login'>
                        <AccountCircle style={{marginRight:5}}/> Log In
                    </Button>
                    <Button className="signUpButton" component={Link} to='/signup'>
                        Sign up free <ArrowForwardIcon style={{marginLeft:5}}/>
                    </Button>
        </div>
    ) : (
        <div className={classes.buttonDiv}>
                    <Button className="signInButtonBM" component={Link} to='/login'>
                        <AccountCircle style={{marginRight:5}}/> Log In
                    </Button>
                    <Button className="signUpButtonBM" component={Link} to='/signup'>
                        Sign up free <ArrowForwardIcon style={{marginLeft:5}}/>
                    </Button>
        </div>
    )

    return ( 
        <AppBar color="transparent" position="absolute" style={{boxShadow:'none'}} >
            <Toolbar className={classes.toolbar} >
                {logos}
                <Mobile>
                    <MenuIcon className={classes.menuIcon}/>
                </Mobile>
                <Tablet>
                    {buttonTB}
                </Tablet>
                <Desktop>
                    {buttonTB}
                </Desktop>
            </Toolbar>
        </AppBar>
     );
}
 
export default HeadNav;