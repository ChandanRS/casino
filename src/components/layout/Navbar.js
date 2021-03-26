import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import logo from '../../images/logo.png'
import Login  from '../auth/Login'
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector(state => state.userInfo.name)
  const [login, setLogin] = useState(false)
  const dispatch = useDispatch();
  // const [balance, setBalance] = useState(()=> localStorage.getItem("balance"))
  // console.log(balance)
  //   useEffect(() => {
  //     setBalance(localStorage.getItem("balance"))
  //   }, [balance])
  const authLinks = (
    <ul>
      <p style={{cursor:"pointer"}} onClick={() => dispatch(logout())}>
        <i className="fas fa-sign-out-alt"></i>
        <span className="hide-sm">Logout</span>
      </p>
    </ul>
  );
  const guestLinks = (
    
    <ul>
     <p onClick={()=>setLogin(true)}>Login</p>
      {login && <Login /> }
    </ul>
  );
  return (
    <div>
      <nav className="navbar bg-dark">
          <Link to="/"><img style={{height:"2.5rem",width:"3rem",borderRadius:"50%",marginLeft:"3rem"}} src={logo} alt="brand-logo"></img></Link>
          
        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default Navbar;
