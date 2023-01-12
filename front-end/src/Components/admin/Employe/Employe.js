import React from 'react'
import { Link } from 'react-router-dom'

const Employe = () => {
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
            <form>
                <input type={'text'} placeholder='hh'/>
            </form>
            <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
                <table className="table table-bordered" id="myTable">
                    <thead>
                        <tr style={{color: "#acacac"}}>
                            <th scope='col'>image</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope='col'>price</th>
                            <th scope='col'>categorie</th>
                            <th className="text-center">operation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="align-middle">
                            {/* <td><img width={100} src={repas.image ? 'http://localhost:8080/images/'+repas.image:''}/></td> */}
                            <td className='text-nowrap'>azert</td>
                            <td >description</td>
                            <td>price</td>
                            <td>categorie</td>
                            <td className="d-flex flex-row justify-content-end">
                                <div className='text-nowrap'>
                                    <Link to={`/EditRepas/`} className='btn btn-outline-info me-1'><i className="bi bi-pencil-square"></i></Link>
                                    <button className="btn btn-outline-danger" ><i className="bi bi-trash"></i></button>
                                </div>
                            </td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Employe