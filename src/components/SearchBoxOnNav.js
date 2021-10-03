import React from 'react';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles'

//Icons
import SearchIcon from '@material-ui/icons/Search';

//redux
// import {useDispatch,useSelector} from 'react-redux';
// import {textForSearching} from '../redux/actions/dataActions';


const useStyles = makeStyles((theme)=>({
    contSearch:{
        display: 'flex',
        height: 30,
        width: 250,
        marginRight: 30,
        [theme.breakpoints.down('sm')]: {
            height: 20,
            width: 185,
            marginRight: 10,
        },
        [theme.breakpoints.up('fullHD')]: {
            height: 30,
            width: 300,
            marginRight: 30,
        }
    },
    sInput:{
        width: '100%',
        border: 'none',
        borderRadius: 2,
        paddingLeft:10
    },
    sIcon:{
        color:'black',
        marginRight:5
    }
}))

const SearchBoxOnNav = () => {
    
    const classes = useStyles();
    // const dispatch = useDispatch();

    // const setTheTextForSearch = (event)=> {
    //     dispatch(textForSearching(event.target.value))
    // }

    return ( 
            <div className={classes.contSearch}>
                <div className={classes.sIcon}>
                    <SearchIcon/>
                </div>
                <input
                    type="search"
                    placeholder="Start your search"
                    // onChange={setTheTextForSearch}
                    className={classes.sInput}
                />
            </div>
     );
}
 
export default SearchBoxOnNav;