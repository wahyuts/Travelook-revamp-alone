import React from 'react';
import NoImg from '../../images/NoImage.png'

//Mat UI Stuff
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    contCard:{
        display: 'flex',
        width:'100%',
        // height:'30%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom:20,
        borderRadius:5
    },
    contImage:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
        [theme.breakpoints.down('sm')]: {
            width: 100,
            height:100,
        },
    },
    image:{
        width: 100,
        height:100,
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
            width: 80,
            height:80,
        },
    },
    nameOnComment:{
        marginBottom:0, 
        fontSize:20,
        [theme.breakpoints.down('sm')]: {
            fontSize:16
        },
    },
    dateOnComment:{
        listStyle: 'none', 
        fontSize:15,
        [theme.breakpoints.down('sm')]: {
            fontSize:10
        },
    },
    bodyOnComment:{
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        },
    }
}))

const CommentCard = () => {
    const classes = useStyles();
    return ( 
        <div>   
            <div className={classes.contCard}>
                <div className={classes.contImage}>
                    <img src={NoImg} alt="Profile user" className={classes.image}/>
                </div>
                <div>
                    <p className={classes.nameOnComment}>Wahyu Trisna Setiadi</p>
                    <li className={classes.dateOnComment}>2 Days ago</li>
                    <p className={classes.bodyOnComment}>First Comment, Ciaou!!!</p>
                </div>
            </div>

            <div className={classes.contCard}>
                <div className={classes.contImage}>
                    <img src={NoImg} alt="Profile user" className={classes.image}/>
                </div>
                <div>
                    <p className={classes.nameOnComment}>Likoo Indra</p>
                    <li className={classes.dateOnComment}>4 Days ago</li>
                    <p className={classes.bodyOnComment}>Second Comment, Ciaou!!!</p>
                </div>
            </div>

            <div className={classes.contCard}>
                <div className={classes.contImage}>
                    <img src={NoImg} alt="Profile user" className={classes.image}/>
                </div>
                <div>
                    <p className={classes.nameOnComment}>Eutami</p>
                    <li className={classes.dateOnComment}>4 Days ago</li>
                    <p className={classes.bodyOnComment}>Third Comment, Ciaou!!!</p>
                </div>
            </div>
        </div>
        
     );
}
 
export default CommentCard;