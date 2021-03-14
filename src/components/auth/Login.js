import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };
  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/users" />;
  }

  return (
    <section className="container">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="signin">
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Sign into Your Account
            </p>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="username"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
              Don't have an account? No worries! Just Enter Anything!
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

export default connect(mapStateToProps, { login })(Login);
