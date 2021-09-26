import React,{useEffect} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import HeadNav from './components/layout/HeadNav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SearchResultPage from './pages/SearchResultPage';
import jwtDecode from 'jwt-decode';
import themeFile from './util/theme';
import './App.css';

//Mui Stuff
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

//Redux
import {Provider} from 'react-redux';  
import store from './redux/store';
import {logoutUser, getUserData} from './redux/actions/userActions';
import {SET_AUTHENTICATED} from './redux/type';

const theme = createTheme(themeFile);

const App = () => {
  const token = localStorage.FBIdToken;

  const history = useHistory();
  const changePage = () => {
    history.push('/login');
  }

  useEffect(()=>{
    if(token){
      const decodedToken = jwtDecode(token);
      console.log('decode token',decodedToken);
      if(decodedToken.exp * 1000 < Date.now()){
        store.dispatch(logoutUser());
        changePage();
      } else {
        store.dispatch({type: SET_AUTHENTICATED})
        axios.defaults.headers.common['Authorization'] = token
        store.dispatch(getUserData())
      }
    }
  })
   
  return ( 
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
            <Router>
                <div className="containerAPP">
                    <Route exact path={["/", "/detail_hotel"]} component={HeadNav}/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/detail_hotel" component={DetailPage}/> {/**path hanya untuk sementara */}
                        <Route exact path="/search_result" component={SearchResultPage}/>
                        <Route exact path='/login' component={LoginPage}/>
                        <Route exact path='/signup' component={SignUpPage}/>
                    </Switch>
                    <Route exact path={["/","/detail_hotel"]} component={Footer}/>
                </div>
            </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
   );
}
 
export default App;

