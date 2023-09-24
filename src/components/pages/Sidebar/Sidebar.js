import createProject from "../images/create-project-active.svg"
import dashboard from "../images/Dashboard-active.svg";
import projectList from "../images/Project-list-active.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import logout from "../images/Logout.svg";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogoutFun = () => {
    navigate("/");
  }

  return (
    <div className=" sidebar">
        <div className="first-section">
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1'>
              <NavLink to={"/"}>
                <img src={dashboard} alt='Dashboard' width={"25px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
          <p className='dot-line'></p>
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            
            {/* {pathname==="/project-list" &&
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p>
            } */}
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1'>
              {/* <NavLink to={"/project-list"}>
                <img src={pathname==="/project-list" ? projectListActive : projectList} alt='Project List' width={"25px"} style={{cursor: "pointer"}}/>
              </NavLink> */}
              <NavLink to={"/list"}>
                <img src={projectList}alt='Project List' width={"25px"} style={{cursor: "pointer"}}/>
              </NavLink>
            </div>
          </div>
          <p className='dot-line'></p>
          <div className='d-flex justify-content-between' style={{width: "100%"}}>
            {/* {pathname==="/create-project" &&
              <p style={{backgroundColor: "#035BAB", height: "100%", width: "6px"}} className="rounded-end"></p>
            } */}
            <div className='d-flex flex-grow-1 align-items-center justify-content-center pt-1 pb-1'>
              {/* <NavLink to={"/create-project"}>
                <img src={pathname==="/create-project" ? createProjectActive : createProject} alt='Create Project' width={"25 px"} style={{cursor: "pointer"}}/>
              </NavLink> */}
                   <NavLink to={'/add'}>
                <img src={createProject} alt='Create Project' width={"25 px"} style={{cursor: "pointer"}}/>
              </NavLink>

            </div>
          </div>
        </div>
        <div className="logout">
          <img src={logout} alt='Logout' style={{cursor: "pointer"}} onClick={handleLogoutFun}/>
        </div>
      </div>
  )
}

export default Sidebar