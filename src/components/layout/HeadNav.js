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

//Redux
import{useDispatch,useSelector} from 'react-redux';
import {logoutUser} from '../../redux/actions/userActions';

//Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';
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
    displayAfterLogin:{
        display: 'flex',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: '5.8%',
        [theme.breakpoints.down('sm')]: {
            marginRight: '5%'
        },
        '& .nameAndAccountStyle':{
            color:'white',
            marginRight:5
        },
        '& .logOutIcon':{
            marginLeft:20, 
            color: 'white', 
            fontSize:30
        },
        '& .nameAndAccountStyleBM':{
            color:'black',
            marginRight:5
        },
        '& .logOutIconBM':{
            marginLeft:20, 
            color: 'black', 
            fontSize:30
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
    const {authenticated,loading,credentials:{first_name}} = useSelector(state=>state.user);
    const dispatch = useDispatch();

    const classes= useStyles();
    const history = useHistory();
    const location = useLocation();
    console.log('Lokasi saat ini',location.pathname);
    console.log('auth',authenticated);
    // console.log('profile user', credentials)

    const imageClick = () => {
        history.push('/detail_hotel')
    }

    const logout = () => {
        dispatch(logoutUser());
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

    let buttonTB= !loading ? (authenticated ? ( location.pathname === "/" ? (
        <div className={classes.displayAfterLogin}>
                <AccountCircle className="nameAndAccountStyle"/>
                <p className="nameAndAccountStyle">{first_name}</p> 
                <LogoutIcon className="logOutIcon" onClick={logout}/>
        </div>
    ): (
        <div className={classes.displayAfterLogin}>
                <AccountCircle className="nameAndAccountStyleBM"/>
                <p className="nameAndAccountStyleBM">{first_name}</p> 
                <LogoutIcon className="logOutIconBM" onClick={logout}/>
        </div>
    )
        
    ) : ( location.pathname === "/" ? (
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
        
    )) : ( <p style={{fontSize:20, color:'white', marginRight: '5%', marginLeft:'auto'}}>...Loading</p> )

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