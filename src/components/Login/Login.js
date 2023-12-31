import React, { useEffect, useState } from 'react';
import "../Login/Login.css";
import logo from "../pages/images/Logo.svg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const checkValidation = (data) => {
    let temp = { ...error };
    if ("email" in data) {
      temp.email = data.email === "" ? "Email is required" : "";
    }
    if ("password" in data) {
      temp.password = data.password === "" ? "Password is required" : "";
    }

    setError({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkLogin = async (data) => {
    try {
      let res = await axios.post(`http://localhost:8080/user/login`, formData);
      if (res.status === 200) {
        localStorage.setItem("primelab", true); 
        navigate("/home");
      } else {
        // Set the login error message if the login is not successful
        setLoginError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setLoginError("Invalid user.");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkValidation(formData)) {
      checkLogin(formData);
    }
  };

  useEffect(() => {
    let login = localStorage.getItem("primelab");
    if (login) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="login-main d-flex align-items-center flex-column">
      <div className='img-div'>
        <img src={logo} alt='' />
      </div>
      <p>Online Project Management</p>
      <div className="card border border-0 shadow-lg p-3 mb-5 bg-body-tertiary">
        <p className='text-center fs-5 mt-4' >Login to get started</p>
        <form className='p-4 fs-6 form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-control-placeholder" htmlFor="email" style={{ color: error.email ? "red" : "" }}>Email</label>
            <input type="email" className="form-control" name='email' onChange={handleOnChange} value={formData?.email} style={{ borderColor: error.email ? "red" : "" }} />
            {error.email && <p style={{ color: "red", fontSize: "15" }}>{error.email}</p>}
          </div>
          <div className="form-group mt-4">
            <label className="form-control-placeholder" htmlFor="password" style={{ color: error.password ? "red" : "" }}>Password</label>
            <div className="input-group align-items-center">
              <input type={showPassword ? 'text' : 'password'} className="form-control" onChange={handleOnChange} name='password' value={formData?.password} style={{ borderColor: error.password ? "red" : "" }} />
              <span toggle="#password-field" className={`fa fa-fw ${showPassword ? 'fa-eye' : 'fa-eye-slash'} field-icon`} onClick={togglePasswordVisibility}></span>
            </div>
            {error.password && <p style={{ color: "red", fontSize: "15" }}>{error.password}</p>}
          </div>
          <div className='d-flex justify-content-end'>
            <p className='forgot-password'>Forgot password?</p>
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <button className='rounded-5 login-btn self-align-center' type='submit'>Login</button>
          </div>
          {loginError && (
        <div className="text-danger text-center mt-3">
          {loginError}
        </div>
      )}
        </form>
      </div>
    
    </div>
  );
}

export default Login;
