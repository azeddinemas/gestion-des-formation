import {API_URL} from "../Components/Config";
import axios from "axios";



export const login = (user)=>(dispatch)=>{
    axios.post(`${API_URL}/user/login`,user)
    .then((data)=>{
        localStorage.setItem('role',data.data)
        dispatch({type:'LOGIN_SUCCESS',payload:data.data})
    }).catch((err)=>{
        dispatch({type:'LOGIN_FIELD',payload:null})
    })
}


export const logout = ()=>(dispatch)=>{
    localStorage.clear()
    .then(()=> {
        dispatch({type:'LOGOUT'})
    })
    
}