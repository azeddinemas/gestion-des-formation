import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from "axios";
import { API_URL } from '../../Config';
import { toast, ToastContainer } from 'react-toastify';

const Editeorganism = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [first, setFirst] = useState({})
    function getOneOrganism() {
        axios.get(`${API_URL}/organism/getone/${id}`)
        .then((e)=>{
            setFirst(e.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {
        getOneOrganism()
    }, [])
    
    const change = (e)=>{
        setFirst({...first,[e.target.name] : e.target.value})
    }
    const handleSubmit = ()=>{
        axios.post(`${API_URL}/organism/edit/${id}`,first)
        .then((e)=>{
            toast.success('update success')
            navigate('/organism')
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='col-8 mx-auto card mt-5'>
        <h1 className='card-header'>Edite Organism</h1>
        <form method="POST" className='mt-2 card-body'>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" onChange={change} value={first.name}  className="form-control" placeholder='name' name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">ville</label>
                <input type="text" onChange={change} value={first.ville} className="form-control" placeholder='ville' name="ville" />
            </div>
            <div className="mb-3">
                <label className="form-label">addresse</label>
                <input type="text" onChange={change} value={first.addresse} className="form-control" placeholder='addresse' name="addresse" />
            </div>
            <div className="mb-3">
                <label className="form-label">phone</label>
                <input type="text" onChange={change} value={first.phone} className="form-control" placeholder='phone' name="phone" />
            </div>
            <div className='mt-2'>
                <button type="button" onClick={handleSubmit} className="btn btn-info text-white mt-4">AJOUTER</button>
            </div>
        </form>
        <hr />
        <ToastContainer/>
    </div>
  )
}

export default Editeorganism