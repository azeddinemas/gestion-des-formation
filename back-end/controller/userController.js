const User = require('../model/Usersmodel')
const bcrypt = require('bcryptjs')
const mailer = require('./mailerController')
const ls = require('local-storage')

const addUser = async(req,res)=>{

    const {body} = req;
    try {
        const mail = await User.findOne({email : body.email})
        if (!mail) {
            ls('email',body.email)
            mailer.main()
            const hash = await bcrypt.hash(body.password,10)
            const data = await User.create({...body,role : 'employe',password:hash})
            if (data) {
                res.status(200).send(data) 
            }else res.status(401).send('not created')
        }else {
            res.status(401).send('email deja exist')
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
            if (mail.confirmed == true) {
                const pass = await bcrypt.compare(body.password,mail.password)
                if (pass) {
                    res.send('login success')
                }else {res.status(401).send('password incorrect')}
            }else {res.send('your email not confirmed')}
        }else {
            res.status(401).send('email incorrect')
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

const getAll = async(req,res)=>{
    try {
        const data = await User.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}


module.exports = {addUser,login,getAll}