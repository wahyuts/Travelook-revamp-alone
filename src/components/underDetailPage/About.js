import React from 'react';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    fontPAbout:{
        [theme.breakpoints.down('sm')]: {
            fontSize:12
        },
    }
}))

const About = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.fontPAbout}>
            <p>Labore laborum reprehenderit et nulla consectetur enim tempor excepteur deserunt exercitation eu ullamco. Velit nostrud aliquip minim officia proident qui non tempor nostrud quis. 
               Laboris duis cupidatat excepteur occaecat consequat ipsum enim. Esse exercitation laborum anim dolor sint anim laboris ut labore enim officia cillum laboris. Tempor mollit ut nulla amet amet ad excepteur pariatur eu. 
               Duis do tempor enim ex anim incididunt sunt.</p>
        </div>
     );
}
 
export default About;