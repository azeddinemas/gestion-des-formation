import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Addemploye from './Addemploye'
import { API_URL } from '../../Config';

const Employe = () => {

    const [data, setData] = useState([])
    function getAllEmploye() {
        axios.get(`${API_URL}/user/getall`).then((e)=>{
            setData(e.data)
        })
    }

    useEffect(() => {
        getAllEmploye()
    }, [])

    function banie(id) {
        axios.put(`${API_URL}/user/banie/${id}`)
        .then(()=>{
            getAllEmploye()
        })   
    }
  return (
    <div className="container-fluid">
        <div className="row mt-4">
            <div className="col-md d-flex justify-content-between">
                <div className="">
                    <h3>Employe List</h3>
                </div>
                <div className="">
                    <i className="bi bi-eject text-info me-2 fs-5"></i>
                    <label htmlFor="adds" className='btn btn-info text-white'>ADD NEW Employe</label>
                </div>
            </div>
        </div>
        <hr/>
        <input type="checkbox" className="d-none" id="adds"/>
        <Addemploye/>
        <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
            <table className="table table-bordered" id="myTable">
                <thead>
                    <tr style={{color: "#acacac"}}>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope='col'>phone</th>
                        <th scope='col'>organism</th>
                        <th scope='col'>status</th>
                        <th className="text-center">operation</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((data)=>(
                        <tr className="align-middle">
                            <td className='text-nowrap'>{data.name}</td>
                            <td >{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.organism?data.organism.name:''}</td>
                            <td>{data.active?<span className="badge text-bg-success">Activé</span>:<span className="badge text-bg-danger">Désactivé</span>}</td>
                            <td className="d-flex flex-row justify-content-end">
                                <div className='text-nowrap'>
                                    <button className="btn btn-outline-warning" onClick={()=>banie(data._id)}>{data.active ? 'désactiver' : 'activer'}</button>
                                </div>
                            </td>
                        </tr>  
                    ))}                      
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Employe