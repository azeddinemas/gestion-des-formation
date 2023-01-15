import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

import axios from "axios";
import { API_URL } from '../../Config';
import { toast, ToastContainer } from 'react-toastify';

const Editformation = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [edit, setEdit] = useState({})
    function getOne() {
        axios.get(`${API_URL}/formation/getone/${id}`)
        .then((e)=>{
            setEdit(e.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const [employe, setEmploye] = useState([])
    const fetchEmploye = () => {
        axios.get(`${API_URL}/user/getall`)
        .then((all)=>{
            setEmploye(all.data)
        })
      }
    
    useEffect(() => {
        getOne()
        fetchEmploye()
    }, [])

    const handlechange = (e)=>{
        setEdit({...edit,[e.target.name] : e.target.value})
    }

    const handleSubmit = ()=>{
        axios.post(`${API_URL}/formation/edit/${id}`,edit)
        .then((e)=>{
            toast.success('update success')
            navigate('/formation')
        }).catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <div className='col-8 mx-auto card mt-2'>
        <h1 className='card-header'>edite formation</h1>
        <form method="POST" className='mt-2 card-body'>
            <div className="mb-3">
                <label className="form-label" >Name</label>
                <input type="text" className="form-control" onChange={handlechange} placeholder='name' value={edit.name} name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">description</label>
                <input type="text" className="form-control" onChange={handlechange} placeholder='description' value={edit.description} name="description" />
            </div>
            <div className="mb-3">
                <label className="form-label">Formateur/ice</label>
                <select className='form-select' onChange={handlechange} name="employe">
                    {employe.map((d)=>(
                        <>
                        <option key={d._id} style={{display : 'none'}}>Employes</option>
                        <option className='form-control' value={d._id}>{d.name}</option> 
                        </>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">image</label>
                <input type="file" className="form-control" name="image" />
            </div>
            <div className="mb-3">
                <label className="form-label">date debut</label>
                <input type="date" className="form-control" onChange={handlechange} placeholder='date debut' name="debut" />
            </div>
            <div className="mb-3">
                <label className="form-label">date fin</label>
                <input type="date" className="form-control"onChange={handlechange} placeholder='date fin' name="fin" />
            </div>
            <div className='mt-2'>
                <button type="button" onClick={handleSubmit} className="btn btn-info text-white mt-4">Modifie</button>
            </div>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Editformation