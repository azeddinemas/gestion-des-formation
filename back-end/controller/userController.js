const User = require('../model/Usersmodel')
const bcrypt = require('bcryptjs')

const addUser = async(req,res)=>{

    const {body} = req;
    try {
        const mail = await User.findOne({email : body.email})
        if (!mail) {
            const hash = await bcrypt.hash(body.password,10)
            const data = await User.create({...body,role : 'employe',password:hash})
            if (data) {
                res.status(200).send(data) 
            }else res.status(401).send('not created')
        }else {
            res.send('email deja exist')
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

const login = async(req,res)=>{

    try {
        const {body}=req;
        const mail = await User.findOne({email : body.email})
        if (mail) {
            const pass = await bcrypt.compare(body.password,mail.password)
            if (pass) {
                res.send('login success')
            }else {res.status(401).send('password incorrect')}
        }else {
            res.status(401).send('email incorrect')
        }
    } catch (error) {
        res.status(401).send(error)
    }
}


module.exports = {addUser,login}