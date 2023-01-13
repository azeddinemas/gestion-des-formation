import React from 'react'
import { NavLink,Link} from "react-router-dom";
import "./side.css";
import img from "./images/pic-1.png";

const Sidebar = () => {
  return (
    <>
        <input type="checkbox" id="menu" className='d-none'/>
        <div style={{ background: "#EDEDED"}} id="sid" className="col-auto col-xl-2 min-vh-100 text-center">
            <label htmlFor="menu" id="label" className="btn float-end"><i className="bi bi-arrow-left-circle fs-3"></i></label>
            <h3 className="text-start pt-2">
                <span className="text-info">|</span>Formation
            </h3>
            <br />
            <img className="rounded rounded-circle w-50" src={img} />
            <h4>ADMIN</h4>
            <p className="text-info">admin</p>
            <hr />
            <nav className="text-start p-2 ">
                <NavLink className="nav-link p-2" to={"/dashboard"}>
                    <i className="bi bi-speedometer2 fs-5 me-2"></i>&nbsp;Dashboard
                </NavLink>
                <br />
                <NavLink className="nav-link p-2" to={"/organism"}>
                    <i className="bi bi-buildings fs-5 me-2"></i>&nbsp;Organism
                </NavLink>
                <br />
                <NavLink className="nav-link p-2" to={"/formation"}>
                    <i className="bi bi-book fs-5 me-2"></i>&nbsp;&nbsp;Formation
                </NavLink>
                <br />
                <NavLink className="nav-link p-2" to={"/employes"}>
                    <i className="bi bi-people me-2 fs-5"></i> Users
                </NavLink>
                <br />
                <NavLink className="nav-link p-2" to={""}>
                    <i className="bi bi-sliders me-2 fs-5"></i> settings
                </NavLink>
                <br />
            </nav>
            <Link to={"#"} className="nav-link p-1 pt-0">
                <i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout
            </Link>
        </div>
    </>
  )
}

export default Sidebar