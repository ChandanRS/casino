import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth : {isAuthenticated, loading}, logout }) => {
    const authLinks = (
      <ul>
        <Link to="/profiles">Employees</Link>
        <Link onClick={logout} to="/#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </Link>
      </ul>
    );
    const guestLinks = (
      <ul>
        <Link to="/profiles">Employees</Link>
        <Link to="/">Login</Link>
      </ul>
    );
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/">GoPoolIt! </Link>
                </h1>
              {!loading && <Fragment> {isAuthenticated? authLinks : guestLinks} </Fragment>}
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    logout : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps,{ logout })(Navbar);