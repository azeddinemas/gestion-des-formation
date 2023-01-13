import React from 'react'

const Addorganism = () => {
  return (
    <div className='form'>
            <form method="POST" className='mt-2 d-flex justify-content-between' encType='multipart/form-data' id='form'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='name' name="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">description</label>
                    <input type="text" className="form-control" placeholder='description' name="description" />
                </div>
                <div className="mb-3">
                    <label className="form-label">price</label>
                    <input type="text" className="form-control" placeholder='price' name="price" />
                </div>
                <div className="mb-3">
                    <label className="form-label">categorie</label>
                    <select className='form-select' name="categorie">
                            <option className='form-control'>jgkj</option> 
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">image</label>
                    <input type="file" className="form-control" name="image" multiple />
                </div>
                <div className='mt-2'>
                    <button type="button" className="btn btn-info text-white mt-4">AJOUTER</button>
                </div>
            </form>
            <hr />
        </div>
  )
}

export default Addorganism