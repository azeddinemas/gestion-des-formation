import React,{useState} from 'react'
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {API_URL} from "../Config";

const Login = () => {
    const navigate = useNavigate()
    const [first, setFirst] = useState({})
    const handlechange = (e)=>{
        setFirst({...first,[e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`${API_URL}/user/login`,first)
        .then((data)=>{
            localStorage.setItem('role',data.data)
            if (data.data = 'admin') {
                navigate('/dashboard')
            }
        }).catch((err)=>{
            console.log(err.response.data.message)
        })
    }
  return (
    <div className="container mt-5">
        <div className="card mx-auto" style={{maxWidth: '40rem'}}>
            <div className="card-header">
                <h1>Formation</h1>
            </div>
            <form method='POST' className="card-body">
                <h2 className="text-center mb-4">Log In</h2>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" onChange={handlechange} name="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" onChange={handlechange} name="password" className="form-control"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">Remember me</label>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-info text-white">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login