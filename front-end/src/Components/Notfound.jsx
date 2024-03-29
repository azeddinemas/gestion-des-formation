import React from 'react'
import logo from "./admin/pages/images/404.svg";
import oops from "./admin/pages/images/oops.svg";
import { Link } from "react-router-dom";


const Notfound = () => {
  return (
    <main className="container mt-3">
      <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-10 col-10 mt-5">
              <img src={oops} className="mt-lg-5" alt=""/>
              <p className="fs-3 mt-2">We can’t seem to find a page you are looking for </p>
              <Link to="/login" className="btn btn-outline-warning mt-2 p-2">Back to home</Link>
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10 mx-auto mt-5 justify-content-center">
              <img src={logo}/>
          </div>
      </div>
    </main>
  )
}

export default Notfound