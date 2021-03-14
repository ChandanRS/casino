import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import logo from '../../images/logo.png'

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const authLinks = (
    <ul>
      <Link to="/users">Users</Link>
      <Link onClick={() => dispatch(logout())} to="/#!">
        <i className="fas fa-sign-out-alt"></i>
        <span className="hide-sm">Logout</span>
      </Link>
    </ul>
  );

  return (
    <div>
      <nav className="navbar bg-dark">
          <Link to="/"><img style={{height:"2.5rem"}} src={logo} alt="brand-logo"></img></Link>
        {isAuthenticated && authLinks}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default Navbar;
