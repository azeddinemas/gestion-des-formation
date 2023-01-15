import React,{useState} from 'react'
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../Config.js";
const Addorganism = () => {
    const [first, setFirst] = useState({})

    const change = (e)=>{
        setFirst({...first,[e.target.name] : e.target.value})
    }

    const addOrganism = ()=>{
        axios.post(`${API_URL}/organism/add`,first)
        .then(() => {
            toast.success('added success')
            window.location.reload()
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    
  return (
    <div className='form'>
        <form method="POST" className='mt-2 d-flex justify-content-between' id='form'>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" onChange={change} className="form-control" placeholder='name' name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">ville</label>
                <input type="text" onChange={change} className="form-control" placeholder='ville' name="ville" />
            </div>
            <div className="mb-3">
                <label className="form-label">addresse</label>
                <input type="text" onChange={change} className="form-control" placeholder='addresse' name="addresse" />
            </div>
            <div className="mb-3">
                <label className="form-label">phone</label>
                <input type="text" onChange={change} className="form-control" placeholder='phone' name="phone" />
            </div>
            <div className='mt-2'>
                <button type="button" onClick={addOrganism} className="btn btn-info text-white mt-4">AJOUTER</button>
            </div>
        </form>
        <hr />
        <ToastContainer/>
    </div>
  )
}

export default Addorganism