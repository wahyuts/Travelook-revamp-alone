import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import HeadNav from './components/layout/HeadNav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SearchResultPage from './pages/SearchResultPage';
import themeFile from './util/theme';
import './App.css';

//Mui Stuff
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles'
import Login from './pages/Login';
import Signup from './pages/Signup';

//Redux
import {Provider} from 'react-redux';  
import store from './redux/store';

const theme = createTheme(themeFile);

const App = () => {

  const history = useHistory();
  const changePage = () => {
    history.push('/login');
  }
   
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
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/signup' component={Signup}/>
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

