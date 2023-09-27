import { ADD_PROJECT_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, GET_GRAPHDATA_ERROR, GET_GRAPHDATA_REQUEST, GET_GRAPHDATA_SUCCESS, GET_PROJECT_FAIL, GET_PROJECT_REQUEST, GET_PROJECT_SUCSESS } from "./actionType"

const initialState={
    data:[],
    GraphData:{},
    isErr:false,
    isLoading:false,
    err:null
}

export const Reducer =(state=initialState,{type,payload})=>{
switch(type){
    case GET_PROJECT_REQUEST:{
        return {
           ...state,
           isLoading:true
        }
       }
   case GET_PROJECT_SUCSESS:{
    return {
       ...state,
       data:payload, 
       isLoading:false,
    }
   }
   case GET_PROJECT_FAIL:{
    return {
       ...state,
       isErr:true
    }
   }

   case ADD_PROJECT_REQUEST:{
    return {
       ...state,
       isLoading:true,

    }
   }
   case ADD_PROJECT_SUCCESS:{
    return {
       ...state,
       isLoading:false,
       data: [...state.data, payload],
    }
   }
   case ADD_PROJECT_FAIL:{
    return {
       ...state,
       isErr:true
    }
   }
   case GET_GRAPHDATA_REQUEST:{
    return {
       ...state,
       isLoading:true
    }
   }
   case GET_GRAPHDATA_SUCCESS:{
    return {
       ...state,
       isLoading:false,
       GraphData:payload
    }
   }
   case GET_GRAPHDATA_ERROR:{
    return {
       ...state,
       isErr:true
    }
   }
   default:{
    return state
   }
}

}