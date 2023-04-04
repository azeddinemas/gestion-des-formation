import React,{useState} from 'react'
import "./Login.css"
import { useNavigate,Navigate } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import { login } from '../../actions/auth';
import { useDispatch,useSelector } from 'react-redux';


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const islogin = useSelector(state=>state.auth.login)
    const [user, setUser] = useState({})
    const handlechange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(login(user))
    }

    if (islogin) {
        return navigate('/dashboard')
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
        {/* <ToastContainer/> */}
    </div>
  )
}

export default Login