import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import { Fragment } from 'react';
import Table from './components/casinoFiles/Table'
import Welcome from './components/casinoFiles/Welcome'
import PrivateRoute from './components/routing/PrivateRoute'
import { useEffect } from 'react';
import {loadUser} from './actions/auth'
import SimpleModal from "./components/Modal.js";

const App= ()=> {
 
    useEffect(()=>{
      store.dispatch(loadUser())
    },[])


  return (
    <Provider store={store}>
      <Router>
        <Fragment> 
        <Navbar />
        <Welcome />
        <Table />
      
        <SimpleModal />
        {/* <Route exact path='/' component = {Login} /> */}
        {/* <Switch> */}
        {/* <PrivateRoute exact path='/users'component={Table} /> */}
        {/* </Switch> */}
        <Footer />
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
