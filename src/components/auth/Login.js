import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect,useDispatch ,useSelector} from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import { userInfo } from "../../actions/userInfo"

const Login = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const balance = useSelector(state => state.userInfo.balance)
const [Guest, setGuest] = useState(false)
  const { username, password } = formData;
const dispatch = useDispatch()
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(username){
      dispatch(login(username))
      dispatch(userInfo(username,balance))
    }else{
      dispatch(login("guest"))
      dispatch(userInfo("guest",100))

    }
  };
  //Redirect if logged in
  // if (isAuthenticated) {
  //   return <Redirect to="/users" />;
  // }

  return (
    <section className="container">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="signin">
            <h1 className="large text-primary">Login</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Enter Your Name to Login
            </p>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="username"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => handleChange(e)}
                  required = {Guest ? false : true}
                />
              </div>
              {/* <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </div> */}
              <input type="submit" className="btn btn-primary" value="Login" />
              <input type="submit" className="btn btn-primary" onClick={()=>setGuest(true)} value="Guest" />
            </form>
            <p className="my-1">
              Welcome !!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps )(Login);
