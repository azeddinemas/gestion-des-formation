import React from 'react'

const Statistiques = () => {
  return (
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 rounded-4" style={{background: "#badff8"}}>
                    <i className="bi bi-grid fs-3" style={{color: "#31a2e4"}}></i>
                    <p>Employe</p>
                    <p className="text-end fw-bold fs-5">5</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 rounded-4" style={{background: "#ee94cb"}}>
                    <i className="bi bi-buildings fs-3" style={{color: "#f33d9e"}}></i>
                    <p>Organisme</p>
                    <p className="text-end fw-bold fs-5">5</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 text-white rounded-4" style={{background: "#FF8303"}}>
                    <i className="bi bi-book fs-3"></i>
                    <p>Formation</p>
                    <p className="text-end fw-bold fs-5">5</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 text-white rounded-4" style={{background: "linear-gradient(90deg, rgb(168, 163, 218) 0%, rgb(252, 166, 38) 100%)"}}>
                    <i className="bi bi-person fs-3"></i>
                    <p>Users</p>
                    <p className="text-end fw-bold fs-5">6</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistiques