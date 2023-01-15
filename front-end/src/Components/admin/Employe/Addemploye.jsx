import React,{useState,useEffect} from 'react'
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../Config.js";
const Addemploye = () => {
    const [first, setFirst] = useState({})

    const change = (e)=>{
        setFirst({...first,[e.target.name] : e.target.value})
    }

    const addEmploye = (e)=>{

        axios.post(`${API_URL}/user/add`,first)
        .then(() => {
            toast.success('added success')
            window.location.reload()
        }).catch((err)=>{
            console.log(err.response)
        })
    }


    const [data, setData] = useState([])
    function getAllOrganism() {
        axios.get(`${API_URL}/organism/getAll`).then((e)=>{
            setData(e.data)
        })
    }
    useEffect(() => {
        getAllOrganism()
    }, [])

    
  
  return (
    <div className='form'>
        <form method="POST" className='mt-2 d-flex justify-content-between' encType='multipart/form-data' id='form'>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={change} placeholder='name' name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" onChange={change} placeholder='E-mail' name="email" />
            </div>
            <div className="mb-3">
                <label className="form-label">password</label>
                <input type="password" className="form-control" onChange={change} placeholder='password' name="password" />
            </div>
            <div className="mb-3">
                <label className="form-label">phone</label>
                <input type="text" className="form-control" onChange={change} placeholder='phone' name="phone" />
            </div>
            <div className="mb-3">
                <label className="form-label">Organism</label>
                <select className='form-select' onChange={change} name="organism">
                    {data.map((item)=>(
                        <>
                        <option key={item._id} style={{display:'none'}}>organism</option>
                        <option className='form-control' value={item._id}>{item.name}</option>
                        </>
                    ))}
                </select>
            </div>
            <div className='mt-2'>
                <button type="button" onClick={addEmploye} className="btn btn-info text-white mt-4">AJOUTER</button>
            </div>
        </form>
        <hr />
        <ToastContainer/>
    </div>
  )
}

export default Addemploye