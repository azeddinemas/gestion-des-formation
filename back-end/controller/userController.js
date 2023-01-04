const User = require('../model/Usersmodel')

const addUser = (req,res)=>{

    const {body} = req;
    res.send(body)
    // User.create({...body}).then((e)=>{
    //     res.send(e)
    // }).catch((er)=>{
    //     res.send(er)
    // })
}

module.exports = {addUser}