import React,{useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles'

//Redux stuff
import { useDispatch, useSelector } from "react-redux";
import {signupUser} from '../../redux/actions/userActions';

const useStyles = makeStyles(theme=>({
    contForm:{
        display:'block',
        marginTop:0,
        marginBottom:0,
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'left',
        width:'60%'
    },
    divForm:{
        marginTop:24,
        marginBottom:24,
        marginLeft:0,
        marginRight:0,
        '& .buttonForm':{
            position: "relative",
            width: '100%',
            backgroundColor: '#e5e5e5',
            border: '1px solid #e5e5e5',
            borderRadius: 6,
            fontSize: 18,
            color: '#333',
            fontWeight: 600,
            paddingTop:8,
            paddingBottom:8,
            paddingLeft:16,
            paddingRight:16,
            cursor:'pointer'
        },
        '& .buttonForm:hover':{
            backgroundColor: '#d41a1a'
        }
    },
    labelForm:{
        display:'block',
        fontSize:18,
        color:'rgb(241, 235, 235)',
        marginBottom:4
    },
    inputField:{
        width:'96%',
        height:24,
        paddingLeft:10,
        border:'1px solid black',
        borderRadius:4
    },
    errorMsg:{
        fontSize:12,
        color:'#d41a1a',
        marginTop: 4,
        marginBottom: 8,
        marginLeft:0,
        marginRight:0

    },
    progress:{
        position: "absolute"
    },
    customError:{
        color:'red',
        fontSize: '0.8rem',
        textAlign:'center'
    },
    flexText:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height: 40,
        backgroundColor:'#2d65cc',
        borderRadius: 6,
        color: '#fff',
        fontSize: 17,
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem'
        },
        '& .regHover':{
            color: 'rgba(4, 49, 173, 0.815)',
            cursor: 'pointer'
        },
        '& .regHover:hover':{
            color: '#d41a1a',
        },
    }
}))

const SignUpForm = (props) => {
    const classes = useStyles();
    const {loading} = useSelector (state => state.UI);
    const {errors} = useSelector (state => state.UI);

    const dispatch = useDispatch();
    const History = useHistory();

    const formik = useFormik (
        {
            initialValues: {
                email: "",
                password: ""
            },
            validationSchema: Yup.object({
                name: Yup.string()
                    .min(2, "Mininum 2 characters")
                    .max(20, "Maximum 20 characters")
                    .required("Required!"),
                email: Yup.string()
                    .email("Invalid email format")
                    .required("Required!"),
                password: Yup.string()
                    .min(6, "Minimum 6 characters")
                    .required("Required!"),
                confirmPassword: Yup.string()
                    .min(6, "Minimum 6 characters")
                    .required("Required!")
            }),

            onSubmit: values => { 
                dispatch(signupUser(values, History));
            }
        }
    )

    useEffect(()=>{
        if (errors !== undefined && errors !== null ) {
            History.push("/");
        } else {
            return false
        }
    },[])

    console.log("error", errors)
    return ( 
        <div style={{position:'absolute',top:'16%',left:0,width:'100%'}}>
            <form className={classes.contForm} onSubmit={formik.handleSubmit}>
                <div className={classes.divForm}>
                    <label className={classes.labelForm}>Name</label>
                    <input 
                        type="email" 
                        name="name" 
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className={classes.inputField} />

                        {formik.errors.name && formik.touched.name && (
                            <p className={classes.errorMsg}>{formik.errors.name}</p>
                        )}
                </div>
                <div className={classes.divForm}>
                    <label className={classes.labelForm}>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className={classes.inputField} />

                        {formik.errors.email && formik.touched.email && (
                            <p className={classes.errorMsg}>{formik.errors.email}</p>
                        )}
                </div>
                <div className={classes.divForm}>
                    <label className={classes.labelForm}>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className={classes.inputField} />

                        {formik.errors.password && formik.touched.password && (
                            <p className={classes.errorMsg}>{formik.errors.password}</p>
                        )}
                </div>
                <div className={classes.divForm}>
                    <label className={classes.labelForm}>Confirm Password</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        className={classes.inputField} />

                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                            <p className={classes.errorMsg}>{formik.errors.confirmPassword}</p>
                        )}
                </div>
                <div className={classes.divForm}>
                    <button type="submit" disabled={loading} className="buttonForm">
                        Register
                        {loading && ( // jika loading true maka tampilkan spinner
                                    <CircularProgress className={classes.progress} size={18}/>
                                )}
                    </button>
                    {errors && ( 
                                <p className={classes.customError}>
                                    {errors.general}
                                </p>
                            )}
                </div>
                <div className={classes.flexText}>
                    <p style={{marginRight:10}}>Already have an account?</p>
                    <p className="regHover" onClick={()=>History.push("/login")}>SignIn here</p>
                </div>
            </form>
        </div>
     );
}
 
export default SignUpForm;