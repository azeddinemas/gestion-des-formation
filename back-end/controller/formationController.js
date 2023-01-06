const Formation = require('../model/Formation')

const addFormation = (req,res)=>{
    const {body} = req;
    Formation.create({...body}).then((data)=>{
        res.send(data)
    }).catch(error=>{
        res.status(401).send(error)
    })
} 

const getFormation = (req,res)=>{

    Formation.find().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.status(401).send(error)
    })
}

const getOne = (req,res)=>{
    const {id} = req.params
    Formation.findOne({_id : id}).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.status(401).send(error)
    })
}

const editFormation = (req,res)=>{
    const {body} = req;
    const id = req.params.id;

    Formation.updateOne({_id : id},{...body}).then(()=>{
        res.send('update success')
    }).catch((error)=>{
        res.status(401).send(error)
    })
}

const deleteFormation = (req,res)=>{
    const {id} = req.params

    Formation.deleteOne({_id : id}).then(()=>{
        res.send('deleted success')
    }).catch((error)=>{
        res.status(401).send(error)
    })
}


module.exports = {addFormation,getFormation,getOne,deleteFormation,editFormation}