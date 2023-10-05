import React, { useState } from "react";
import createProject from "../images/create-project-active.svg";
import dashboard from "../images/Dashboard-active.svg";
import indashboard from "../images/Dashboard.svg";
import projectList from "../images/Project-list-active.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logout from "../images/Logout.svg";
import "./Sidebar.css";
import createprojectinactive from "../images/create-project.svg";
import inactive from "../images/Project-list.svg";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define and manage isActive states based on the current URL pathname
  const [isActiveDashboard, setIsActiveDashboard] = useState(
    location.pathname === "/home"
  );
  const [isActiveProjectList, setIsActiveProjectList] = useState(
    location.pathname === "/list"
  );
  const [isActiveCreateProject, setIsActiveCreateProject] = useState(
    location.pathname === "/add"
  );

  const handleNavLinkClick = (path) => {
    setIsActiveDashboard(path === "/home");
    setIsActiveProjectList(path === "/list");
    setIsActiveCreateProject(path === "/add");
  };

  const handleLogoutFun = () => {
    localStorage.removeItem("primelab"); // Remove the "primelab" key
    navigate("/"); // Redirect to the login page
  };
  

  return (
    <div className="sidebar" >
      <div className="first-section">
        {/* Dashboard Icon */}
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%"}}
        >
          <div className="d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1">
            {isActiveDashboard ? (
              <NavLink to={"/"} onClick={() => handleNavLinkClick("/")}>
                <img
                  src={dashboard}
                  alt="Dashboard"
                  width={"25px"}
                  style={{ cursor: "pointer" }}
                />
              </NavLink>
            ) : (
              <NavLink to={"/"} onClick={() => handleNavLinkClick("/")}>
                <img
                  src={indashboard}
                  alt="Dashboard"
                  width={"25px"}
                  style={{ cursor: "pointer" }}
                />
              </NavLink>
            )}
          </div>
        </div>
        <p className="dot-line"></p>

        {/* Project List Icon */}
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1">
            {isActiveProjectList ? (
              <NavLink to={"/list"} onClick={() => handleNavLinkClick("/list")}>
                <img
                  src={projectList}
                  alt="Project List"
                  width={"25px"}
                  style={{ cursor: "pointer" }}
                />
              </NavLink>
            ) : (
              <NavLink to={"/list"} onClick={() => handleNavLinkClick("/list")}>
                <img
                  src={inactive}
                  alt="Project List"
                  width={"25px"}
                  style={{ cursor: "pointer" }}
                />
              </NavLink>
            )}
          </div>
        </div>
        <p className="dot-line"></p>

        {/* Create Project Icon */}
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1">
            {isActiveCreateProject ? (
              <NavLink to={"/add"} onClick={() => handleNavLinkClick("/add")}>
                <img
                  src={createProject}
                  alt="Create Project"
                  width={"25px"}
                  style={{ cursor: "pointer" }}
                />
              </NavLink>
            ) : (
              <NavLink to={"/add"} onClick={() => handleNavLinkClick("/add")}>
                <img
                  src={createprojectinactive}
                  alt="Create Project"
                  width={"25px"}
                  style={{ cursor: "pointer" }}
                />
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <div className="logout">
        <img
          src={logout}
          alt="Logout"
          style={{ cursor: "pointer" }}
          onClick={handleLogoutFun}
        />
      </div>
    </div>
  );
};

export default Sidebar;
