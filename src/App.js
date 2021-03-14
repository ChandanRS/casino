import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import { Fragment } from 'react';
import Profiles from './components/profiles/Profiles'
import PrivateRoute from './components/routing/PrivateRoute'
import { useEffect } from 'react';
import {loadUser} from './actions/auth'

const App= ()=> {
 
    useEffect(()=>{
      store.dispatch(loadUser())
    },[])


  return (
    <Provider store={store}>
      <Router>
        <Fragment> 
        <Navbar />
        <Route exact path='/' component = {Login} />
        <Switch>
        <PrivateRoute exact path='/users'component={Profiles} />
        </Switch>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
