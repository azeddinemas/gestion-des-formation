import React from 'react'
import "./Login.css";

const Login = () => {
  return (
    <div className="container mt-5">
        <div className="card mx-auto" style={{maxWidth: '40rem'}}>
            <div className="card-header">
                <h1>Formation</h1>
            </div>
            <form className="card-body">
                <h2 className="text-center mb-4">Log In</h2>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name='email' className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login