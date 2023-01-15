import React,{useState,useEffect} from 'react'
import axios from "axios";
import { API_URL } from '../../Config';


const Statistiques = () => {
    const [first, setFirst] = useState({})
    function stat() {
        axios.get(`${API_URL}/user/statistique`)
        .then((data) => {
            setFirst(data.data)  
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {    
      stat()
    }, [])
    
  return (
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 rounded-4" style={{background: "#badff8"}}>
                    <i className="bi bi-grid fs-3" style={{color: "#31a2e4"}}></i>
                    <p>Employe</p>
                    <p className="text-end fw-bold fs-5">{first.e}</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 rounded-4" style={{background: "#ee94cb"}}>
                    <i className="bi bi-buildings fs-3" style={{color: "#f33d9e"}}></i>
                    <p>Organisme</p>
                    <p className="text-end fw-bold fs-5">{first.o}</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 text-white rounded-4" style={{background: "#FF8303"}}>
                    <i className="bi bi-book fs-3"></i>
                    <p>Formation</p>
                    <p className="text-end fw-bold fs-5">{first.f}</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 text-white rounded-4" style={{background: "linear-gradient(90deg, rgb(168, 163, 218) 0%, rgb(252, 166, 38) 100%)"}}>
                    <i className="bi bi-person fs-3"></i>
                    <p>Users</p>
                    <p className="text-end fw-bold fs-5">{first.u}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistiques