import React from "react";
import LogoLogin from '../images/LogoPat.png'
import LogoTravelookBM from '../images/Travelook-Black-Font.png'
import {Desktop,Tablet,Mobile,Default} from '../util/ReactResponsiveHook';
import '../css/BackgroundLoginPage.css';// css ini cuma buat atur backgorund dari loginpage saja

//MtT UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SignUpForm from "../components/underLoginPage/SignUpForm";


const useStyles = makeStyles(theme=>({
  gridImage:{
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'50vw', 
    [theme.breakpoints.down("sm")]:{
        height:'28vw'
    }
    // backgroundColor:"green"
  },
  image:{
    position:'absolute',
    // top:'18%',
    // left:'15%',
    width:'65%',
    height:'30vw',
  },
  imageBM:{
    position:'absolute',
    bottom:0,
    // top:'25%',
    left:'19%',
    width:'65%',
    height:'15vw',
  },
  SignUpForm:{
    position:'relative'
  }
  
}))

const SignUpPage = () => {
  const classes = useStyles();

  function handleChange(e)  {
      console.log(e)
  }
  function handleSubmit(e)  {
    console.log(e)
}

  return (
    <div className="bck">
      <Grid container spacing={5}>
          <Grid item sm={6} xs={12} className={classes.gridImage}>
            <Desktop>
                <img src={LogoLogin} alt="Logo Travelook" className={classes.image}/>
            </Desktop>
            <Mobile>
                <img src={LogoTravelookBM } alt="Logo Travelook" className={classes.imageBM}/>
            </Mobile>
            <Tablet>
                <img src={LogoLogin} alt="Logo Travelook" className={classes.image}/>
            </Tablet>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.SignUpForm}>
              <SignUpForm/>
          </Grid>
      </Grid>
    </div>
  );
};

export default SignUpPage;
