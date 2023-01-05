const Organism = require('../model/Organism')

const addOrganism = (req,res)=>{
    const {body} = req;
    Organism.create({...body}).then((data)=>{
        res.send(data)
    }).catch(error=>{
        res.status(401).send(error)
    })
} 

const getOrganism = (req,res)=>{

    Organism.find().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.status(401).send(error)
    })
}

const getOne = (req,res)=>{
    const {id} = req.params
    Organism.findOne({_id : id}).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.status(401).send(error)
    })
}

const editOrganism = (req,res)=>{
    const {body} = req;
    const id = req.params.id;

    Organism.updateOne({_id : id},{...body}).then(()=>{
        res.send('update success')
    }).catch((error)=>{
        res.status(401).send(error)
    })
}

const deleteOrganism = (req,res)=>{
    const {id} = req.params

    Organism.deleteOne({_id : id}).then(()=>{
        res.send('deleted success')
    }).catch((error)=>{
        res.status(401).send(error)
    })
}


module.exports = {addOrganism,getOrganism,getOne,deleteOrganism,editOrganism}