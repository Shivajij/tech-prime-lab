import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import "./ProjectList.css"
import Table from './Table';
import Pagination from '../Pagination/Pagination'
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../../Redux/AppRedux/action';


const ProjectList = () => {
  // const [allProject, setAllProject] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [editWork, setEditWork] = useState(0);

  const dispatch=useDispatch()
  const userState = useSelector(state => state.data);
  const loading = useSelector(state => state.isLoading);


  useEffect(()=>{
    dispatch(getProject(search,page,sort))
  }, [page, sort, search, editWork]);
console.log(userState,"kkkkkk",loading);
  return (
    <div className='d-flex dashboard'>
      <Sidebar />
      <div className='dashboard-main'>
        <Navbar heading={"Project Listing"} iconImg={<span class={"fa fa-fw fa-chevron-left field-icon"} style={{cursor: "pointer"}}></span>} icon={true}/>
        <div className='table-div'>
          <div class="table-second-div">
            <div className='d-flex justify-content-between functionality-menu'>
              <div class="d-flex justify-content-start align-items-center search-div">
                <span class="fa fa-search search-icon"></span>
                <input type="text" class="form-control search-input" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
              </div>
              <div class="d-flex align-items-center justify-content-center sort-option">
                <p>Sort By:</p> 
                  <select onChange={(e) => setSort(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="reason">Reason</option>
                    <option value="type">Type</option>
                    <option value="division">Division</option>
                    <option value="category">Category</option>
                    <option value="department">Dept.</option>
                    <option value="location">Location</option>
                    <option value="status">Status</option>
                  </select>
              </div>
            </div>
           <Table allProject={userState?.projects} setEditWork={setEditWork}/>
          </div>
          <div className='pagination'>
          <Pagination total={userState?.totalPages} active={page} setPage = {setPage}/>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList