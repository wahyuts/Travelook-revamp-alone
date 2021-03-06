import React from 'react';
import Pic3 from '../../images/pict3.png';
import Pic2 from '../../images/pict2.png';
import Pic1 from '../../images/pict1.png';

//MaT UI
import{makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
    contHomeContent:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'center',
        width:'88%',
        height: '80vw', // yang harus dirubah pas media querry
        marginLeft:'6%',
        marginRight:'6%',
        marginBottom:20,
        // backgroundColor:'green'
    },
    contWithImageAndText:{
        display:'flex',
        // backgroundColor:'orange',
        width:'100%',
        marginBottom:50
    },
    contJustTextLeft:{
        width:'40%',
        height:'100%',
        paddingRight:30,
        // backgroundColor:'brown',
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center'
    },
    contJustTextRight:{
        width:'40%',
        height:'100%',
        paddingLeft:30,
        // backgroundColor:'brown',
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center'
    },
    textAtribute:{
        marginBottom:0
    },
    image:{
        width: '100%',
        height: '100%'
    },
    contDivImage:{
        width:'100%',
        height:'100%'
    },
    paragraph:{
        fontSize:16
    },
    textTravelook:{
        marginLeft:'6%',
        marginTop:"6%",
        fontSize:20
    }

}))

const HomeContent = () => {
    const classes = useStyles();
    return ( 
        <div>
            <p className={classes.textTravelook}>TRAVELOOK, YOUR WAY!</p>

            <div className={classes.contHomeContent}>
                <div className={classes.contWithImageAndText}>
                    <div className={classes.contJustTextLeft}>
                        <h1 className={classes.textAtribute}>
                            It’s easy to book <br />
                            house for rent
                        </h1>
                        <p className={classes.paragraph}>
                            Booking house easily and quickly. No need to worry, with just one touch of a finger, the house you need can
                            be obtained easily.
                        </p>
                    </div>
                    <div className={classes.contDivImage}>
                        <img src={Pic3} alt="Booking Process" className={classes.image}/>
                    </div>
                </div>

                <div className={classes.contWithImageAndText}>
                    <div className={classes.contDivImage}>
                        <img src={Pic2} alt="Uniq Home Desain" className={classes.image}/>
                    </div>
                    <div className={classes.contJustTextRight}>
                        <h1 className={classes.textAtribute}>
                            Unique <br />
                            home design
                        </h1>
                        <p className={classes.paragraph}>
                            Each Travelook home is unique, thoughtfully designed, and equipped with a standard set of amenities – whether you 
                            stay in a private room for rent or the entire space for your own use.
                        </p>
                    </div>
                </div>

                <div className={classes.contWithImageAndText}>
                    <div className={classes.contJustTextLeft}>
                        <h1 className={classes.textAtribute}>
                            Host are wonderful. <br />
                            Verified for quality.
                        </h1>
                        <p className={classes.paragraph}>
                            Travelook is a handpicker collection of the highest quality homes 
                            with hosts known foe their great reviews and attention to detail.
                        </p>
                    </div>
                    <div className={classes.contDivImage}>
                        <img src={Pic1} alt="Booking Process" className={classes.image}/>
                    </div>
                </div>

            </div>

            {/* <div className={classes.contHomeContent}>
                <div className={classes.contWithImageAndText}>
                    <div className={classes.contDivImage}>
                        <img src={Pic2} alt="Booking Process" className={classes.image}/>
                    </div>
                    <div className={classes.contJustTextRight}>
                        <h1 className={classes.textAtribute}>
                            Unique <br />
                            home design
                        </h1>
                        <p className={classes.paragraph}>
                            Each Travelook home is unique, thoughtfully designed, and equipped with a standard set of amenities – whether you 
                            stay in a private room for rent or the entire space for your own use.
                        </p>
                    </div>
                </div>
            </div> */}

        </div>
     );
}
 
export default HomeContent;