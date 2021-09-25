import React,{useState} from 'react';

//MaT UI
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

//Icon Mui
import CloseIcon from '@material-ui/icons/Close';
import MyIconButton from '../../util/MyIconButton';

// WARNING ada RED error di dev mode chrome error nya deprecated findnoteDOM bla bla bla
// meski ada red error test develop tetap lancar
// Error nya ada di dalam sini di file ini,..silahkan cari tahu sendiri

const useStyles = makeStyles(theme=>({
    buttonShowAll:{
        height:25, 
        width:170, 
        border:'1px solid grey', 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:15,
        cursor:'pointer'
    },
    DialogContent:{
        padding: 20,
        paddingTop:10,
        paddingLeft:30,
        paddingRight:30
    },
    closeButton:{
        position: 'absolute',
        left: '90%',
        top:'2%',
        [theme.breakpoints.down("sm")]:{
            left: '80%',
            top:'2%',
        }
    },
    titleAmenities:{
        fontSize:32,
        marginTop:0
    },
    secondTitle:{
        fontSize:22,
        marginTop:10,
        marginBottom:0
    },
    hrStyle:{
        borderBottom: '1px solid #E1E1E1', 
        marginTop:30,
        [theme.breakpoints.down("sm")]:{
            marginTop:20
        }
    },
    justLi2:{
        fontSize:17,
        listStyle:'none',
        marginBottom:10,
        marginTop:15,
        [theme.breakpoints.down('sm')]: {
            listStyle:'none',
            fontSize:12,
            marginBottom:10,
        },
    },
    liOnContentAnemities:{
        marginLeft:15,
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        },
    },
}))

const ShowAllAnemitiesDialog = () => {
    const classes = useStyles();
    const [open,setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const AllAnemities = (
        <div>
             <h3 className={classes.titleAmenities}>Amenities</h3>
             <hr className={classes.hrStyle}/>
             <p className={classes.secondTitle}>Facility of this stay</p>
             <Grid container spacing={5} style={{marginBottom:15}}>
                 <Grid item sm={6} xs={12}>
                    <li className={classes.justLi2}>Food & Beverage</li>
                    <li className={classes.liOnContentAnemities}>Restaurant</li>
                    <li className={classes.liOnContentAnemities}>Bar</li>
                    <li className={classes.liOnContentAnemities}>Makan malam prasmanant</li>

                    <li className={classes.justLi2}>Service</li>
                    <li className={classes.liOnContentAnemities}>Receptionist 24 jam</li>
                    <li className={classes.liOnContentAnemities}>Penantu layanan lengkap</li>

                    <li className={classes.justLi2}>Park & Transport</li>
                    <li className={classes.liOnContentAnemities}>Tempat parkir</li>
                    <li className={classes.liOnContentAnemities}>Jemputan bandara</li>
                    <li className={classes.liOnContentAnemities}>Penyewaan mobil ditempat</li>

                    <li className={classes.justLi2}>Healty</li>
                    <li className={classes.liOnContentAnemities}>Gym</li>
                    <li className={classes.liOnContentAnemities}>Spa</li>
                 </Grid>
                 <Grid item sm={6} xs={12}>
                    <li className={classes.justLi2}>Heating & Cooling</li>
                    <li className={classes.liOnContentAnemities}>Air conditioning</li>

                    <li className={classes.justLi2}>Parking Facilities</li>
                    <li className={classes.liOnContentAnemities}>Elevator</li>
                    <li className={classes.liOnContentAnemities}>Gym</li>
                    <li className={classes.liOnContentAnemities}>Paid parking on premises</li>

                    <li className={classes.justLi2}>Kitchen & Dinning</li>
                    <li className={classes.liOnContentAnemities}>Kitchen</li>
                    <li className={classes.liOnContentAnemities}>Microwave</li>
                    <li className={classes.liOnContentAnemities}>Refrigerator</li>
                    <li className={classes.liOnContentAnemities}>Dishes and silverware</li>

                    <li className={classes.justLi2}>Service & Outdoor</li>
                    <li className={classes.liOnContentAnemities}>Long term stays allowed</li>
                    <li className={classes.liOnContentAnemities}>Lockbox</li>
                    <li className={classes.liOnContentAnemities}>Balconny</li>

                 </Grid>
             </Grid>
        </div>
    )
    return ( 
        <div>
            <div className={classes.buttonShowAll} onClick={handleOpen}>
                <p>Show All Anemites </p>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <MyIconButton tip="close" onClick={handleClose} tipClassName={classes.closeButton}>
                    <CloseIcon/>
                </MyIconButton>
                <DialogContent className={classes.DialogContent}>
                    {AllAnemities}
                </DialogContent>
            </Dialog>
        </div>
     );
}
 
export default ShowAllAnemitiesDialog;