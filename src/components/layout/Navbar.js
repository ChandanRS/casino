import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = () => {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  // const loading = useSelector((state)=>state.auth.loading)
  const dispatch = useDispatch()

    const authLinks = (
      <ul>
        <Link to="/users">Users</Link>
        <Link onClick={()=>dispatch(logout())} to="/#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </Link>
      </ul>
    );
    
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/">FTL </Link>
                </h1>
             {isAuthenticated && authLinks } 
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    logout : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired
}

export default Navbar;