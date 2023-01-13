import React,{useState,useEffect} from 'react'
// import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
import { API_URL } from '../../Config';

const Addformation = () => {
    const [first, setFirst] = useState({})

    const handlechange = (e)=>{
        setFirst({...first,[e.target.name] : e.target.value})
    }
    const handlePhoto = (e)=>{
        setFirst({...first, image : e.target.files[0]})
    }

    // start employe

    const [employe, setEmploye] = useState([])
    const fetchEmploye = async () => {
        const all = await axios.get(`${API_URL}/user/getall`);
        setEmploye(all.data)
      }
    
      useEffect(() => {
        fetchEmploye()
      }, [])
    // end employe

    const handlesubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('name',first.name)
        formData.append('description',first.description)
        formData.append('employe',first.employe)
        formData.append('image',first.image)
        formData.append('debut',first.debut)
        formData.append('fin',first.fin)
        axios.post(`${API_URL}/formation/add`,first)
        .then((data) => {
            console.log(data)    
        })
    }

  return (
    <div className='form'>
        <form method="POST" className='mt-2 d-flex justify-content-between' encType='multipart/form-data' id='form'>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" onChange={handlechange} className="form-control" placeholder='name' name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">description</label>
                <input type="text" onChange={handlechange} className="form-control" placeholder='description' name="description" />
            </div>
            <div className="mb-3">
                <label className="form-label">Formateur/ice</label>
                <select className='form-select' name="categorie">
                    {employe.map((data)=>(
                        <option className='form-control' key={data._id}>{data.name}</option> 
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">image</label>
                <input type="file" onChange={handlePhoto} className="form-control" name="image" multiple />
            </div>
            <div className="mb-3">
                <label className="form-label">date debut</label>
                <input type="date" onChange={handlechange} className="form-control" placeholder='date debut' name="debut" />
            </div>
            <div className="mb-3">
                <label className="form-label">date fin</label>
                <input type="date" onChange={handlechange} className="form-control" placeholder='date fin' name="fin" />
            </div>
            <div className='mt-2'>
                <button type="button" onClick={handlesubmit} className="btn btn-info text-white mt-4">AJOUTER</button>
            </div>
        </form>
        <hr />
        {/* <ToastContainer/> */}
    </div>
  )
}

export default Addformation