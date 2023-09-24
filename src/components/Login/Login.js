import axios from "axios";
import { useState } from "react";
import "../Styles/Login.css"
import headingLogo from "../pages/images/Logo.svg"
import passwordIcon from "../pages/images/hide-password.svg"

const Login = () => {
  const [error, setError] = useState({ email: "", password: "" });
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

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
    setLogin({ ...login, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidation(login)) {
      // Check login logic here
      console.log(login)
    }
  };

  return (
    <div className="login-main d-flex align-items-center flex-column">
      <div className="img-div">
        <img src={headingLogo} alt="logo" />
      </div>
      <p>Online Project Management</p>
      <div className="card border border-0 shadow-lg p-3 mb-5 bg-body-tertiary">
        <p className="text-center fs-5 mt-4">Login to get started</p>
        <form className="p-4 fs-6 form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label
              className="form-control-placeholder"
              htmlFor="email"
              style={{ color: error.email ? "red" : "" }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleOnChange}
              value={Login?.email}
              style={{ borderColor: error.email ? "red" : "" }}
              
            />
            {error.email && (
              <p style={{ color: "red", fontSize: "15" }}>{error.email}</p>
            )}
          </div>
          <div className="form-group mt-4">
            <label
              className="form-control-placeholder"
              htmlFor="password"
              style={{ color: error.password ? "red" : "" }}
            >
              Password
            </label>
            <div className="input-group align-items-center">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                onChange={handleOnChange}
                name="password"
                value={Login?.password}
                style={{ borderColor: error.password ? "red" : "" }}
              />
              <span
                className="field-icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={passwordIcon}
                  alt={showPassword ? "Hide Password" : "Show Password"}
                />
              </span>
            </div>
            {error.password && (
              <p style={{ color: "red", fontSize: "15" }}>{error.password}</p>
            )}
          </div>
          <div className="d-flex justify-content-end">
            <p className="forgot-password">Forgot password?</p>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="rounded-5 login-btn self-align-center" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
