import React,{useState,useEffect} from 'react'
import axios from "axios";
import Addorganism from './Addorganism'
import { Link } from 'react-router-dom';
import { API_URL } from '../../Config';

const Organism = () => {
    const [data, setData] = useState([])
    function getAllOrganism() {
        axios.get(`${API_URL}/organism/getAll`).then((e)=>{
            setData(e.data)
        })
    }

    useEffect(() => {
        getAllOrganism()
    }, [])

    function deletOrganism(id,name) {
        const result = window.confirm(`are you sure to deleted ${name}`)
        if (result) {
            axios.delete(`${API_URL}/organism/delete/${id}`)
            .then(()=>{
                getAllOrganism()
            })
        }  
    }
  return (
    <div className="container-fluid">
        <div className="row mt-4">
            <div className="col-md d-flex justify-content-between">
                <div className="">
                    <h3>Organism List</h3>
                </div>
                <div className="">
                    <i className="bi bi-eject text-info me-2 fs-5"></i>
                    <label htmlFor="adds" className='btn btn-info text-white'>ADD NEW Organism</label>
                </div>
            </div>
        </div>
        <hr/>
        <input type="checkbox" className="d-none" id="adds"/>
        <Addorganism/>
        <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
            <table className="table table-bordered" id="myTable">
                <thead>
                    <tr style={{color: "#acacac"}}>
                        <th scope="col">name</th>
                        <th scope="col">ville</th>
                        <th scope='col'>addresse</th>
                        <th scope='col'>phone</th>
                        <th className="text-center">operation</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((organism)=>(
                        <tr key={organism._id}>
                            <td className='text-nowrap'>{organism.name}</td>
                            <td >{organism.ville}</td>
                            <td>{organism.addresse}</td>
                            <td>{organism.phone}</td>
                            <td className="d-flex flex-row justify-content-end">
                                <div className='text-nowrap'>
                                    <Link to={`/Editorganism/${organism._id}`} className='btn btn-outline-info me-1'><i className="bi bi-pencil-square"></i></Link>
                                    <button className="btn btn-outline-danger" onClick={()=>deletOrganism(organism._id,organism.name)}><i className="bi bi-trash"></i></button>
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

export default Organism