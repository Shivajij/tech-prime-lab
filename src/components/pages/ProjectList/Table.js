import axios from 'axios';
import React from 'react'
import "./Table.css"

const Table = ({allProject, setEditWork}) => {
  const editProject = async (text, id) => {
    try {
      await axios.patch(`http://localhost:8080/project/update/${id}`, { status: text });
      setEditWork(Math.random(2));
    } catch (err) {
      console.log(err);
    }
  }
  const dateChange = (dateStr) => {
    const date = new Date(dateStr);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${monthNames[date.getMonth()]}-${date.getDate()}, ${date.getFullYear()}`;
  }

  return (
    <div style={{paddingLeft: "25px", paddingRight: "25px"}}>
      <table className='table'>
        <thead>
          <tr className='table-primary' style={{fontSize: "18px", fontWeight: "500"}}>
            <th>Project Name</th>
            <th>Reason</th>
            <th>Type</th>
            <th>Division</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Dept.</th>
            <th>Location</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            allProject?.map((project) => (
              <tr key={project._id} style={{fontSize: "14px"}}>
                <td>
                  <strong>Project Name:</strong> {project?.projectName}<br />
                  <strong>Dates:</strong> {dateChange(project?.startDate)} to {dateChange(project?.endDate)}
                </td>
                <td><strong>Reason:</strong> {project?.reason}</td>
                <td><strong>Type:</strong> {project?.type}</td>
                <td><strong>Division:</strong> {project?.division}</td>
                <td><strong>Category:</strong> {project?.category}</td>
                <td><strong>Priority:</strong> {project?.priority}</td>
                <td><strong>Dept.:</strong> {project?.department}</td>
                <td><strong>Location:</strong> {project?.location}</td>
                <td style={{fontWeight: "bold"}}><strong>Status:</strong> {project?.status}</td>
                <td>
                  <div className='d-flex gap-3'>
                    <button style={{backgroundColor: "rgb(2,91,170)", color: "white", padding: "3px 18px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}} onClick={()=>editProject("Running", project._id)}>Start</button>
                    <button style={{backgroundColor: "white", color: "#025BAA", padding: "3px 18px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}} onClick={()=>editProject("Closed", project._id)}>Close</button>
                    <button style={{backgroundColor: "white", color: "#025BAA", padding: "3px 18px", borderRadius: "20px", fontWeight: "500", border: "1px solid #025BAA"}} onClick={()=>editProject("Cancelled", project._id)}>Cancel</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;
