const User = require('../model/Usersmodel')

const addUser = (req,res)=>{

    const {body} = req;
    User.create({...body,role : 'employe'}).then((e)=>{
        res.send(e)
    }).catch((er)=>{
        res.send(er)
    })
}

module.exports = {addUser}