import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Addformation from './Addformation';
import axios from "axios";
import "./Formation.css";
import { API_URL } from '../../Config';

const Formation = () => {
    const [data, setData] = useState([])
    function getAll() {
        axios.get(`${API_URL}/formation/getAll`).then((e)=>{
            setData(e.data)
        })
    }

    useEffect(() => {
      getAll()
    }, [])

    function deleted(id,name) {
        const result = window.confirm(`are you sure to deleted ${name}`)
        if (result) {
            axios.delete(`${API_URL}/formation/delete/${id}`)
            .then(()=>{
                getAll()
            })
        }
       
    }
    
  return (
    <div className="container-fluid">
        <div className="row mt-4">
            <div className="col-md d-flex justify-content-between">
                <div className="">
                    <h3>Formation List</h3>
                </div>
                <div className="">
                    <i className="bi bi-eject text-info me-2 fs-5"></i>
                    <label htmlFor="adds" className='btn btn-info text-white'>ADD NEW Formation</label>
                </div>
            </div>
        </div>
        <hr/>
        <input type="checkbox" className="d-none" id="adds"/>
        <Addformation/>
        <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
            <table className="table table-bordered" id="myTable">
                <thead>
                    <tr style={{color: "#acacac"}}>
                        <th scope='col'>image</th>
                        <th scope="col">name</th>
                        <th scope="col">description</th>
                        <th scope='col'>Formateur</th>
                        <th scope='col'>debut</th>
                        <th scope='col'>fin</th>
                        <th className="text-center">operation</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((formation)=>(
                    <tr key={formation._id} className="align-middle">
                        <td><img width={100} src={formation.image ? `${API_URL}/images/${formation.image}`:''}/></td>
                        <td className='text-nowrap'>{formation.name}</td>
                        <td >{formation.description}</td>
                        <td>{formation.employe?formation.employe.name:''}</td>
                        <td>{formation.debut}</td>
                        <td>{formation.fin}</td>
                        <td className="d-flex flex-row justify-content-end">
                            <div className='text-nowrap'>
                                <Link to={`/editformation/${formation._id}`} className='btn btn-outline-info me-1'><i className="bi bi-pencil-square"></i></Link>
                                <button className="btn btn-outline-danger" onClick={()=>deleted(formation._id,formation.name)}><i className="bi bi-trash"></i></button>
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

export default Formation