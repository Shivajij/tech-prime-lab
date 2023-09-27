import axios from "axios"
import { ADD_PROJECT_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, GET_GRAPHDATA_SUCCESS, GET_PROJECT_FAIL, GET_PROJECT_REQUEST, GET_PROJECT_SUCSESS } from "./actionType"



export const registerProject = (createProject) => (dispatch) => {
    dispatch({ type: ADD_PROJECT_REQUEST });
    axios
      .post(`http://localhost:8080/project/create`, createProject)
      .then((res) => {
        dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ADD_PROJECT_FAIL, payload: err.message });
      });
  };

export const getProject=(search,page,sort)=>(dispatch)=>{
   dispatch({type:GET_PROJECT_REQUEST})
   axios.get(`http://localhost:8080/project/all-project?page=${page}&limit=5&sort=${sort}&searchTerm=${search}`).then((res)=>{
    dispatch({type:GET_PROJECT_SUCSESS,payload:res.data})
   }).catch((err)=>{
    dispatch({type:GET_PROJECT_FAIL,payload:err.message})
   })
}



export const getDepartmentWiseData=()=>(dispatch)=>{
  axios.get(`http://localhost:8080/project/department-data`).then((res)=>{
    dispatch({type:GET_GRAPHDATA_SUCCESS,payload:res.data})
  })
}
//  export const getDepartmentWiseData = async() => {
//     try{
//       let res = await axios.get(`http://localhost:8080/project/department-data`);

//       setDepartmentData(res.data);
//     }catch(err){
//       console.log(err)
//     }
//   }