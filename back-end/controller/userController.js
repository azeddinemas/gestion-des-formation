const User = require('../model/Usersmodel')
const bcrypt = require('bcryptjs')
const mailer = require('./mailerController')
const ls = require('local-storage')

const addUser = async(req,res,next)=>{

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
            }else {
                throw new Error('not created')
            }
        }else {
            throw new Error('email deja exist')
        }
    } catch (error) {
        next(error)
    }
}

const login = async(req,res,next)=>{

    try {
        const {body}=req;
        const mail = await User.findOne({email : body.email})
        if (mail) {
            if (mail.confirmed == true) {
                const pass = await bcrypt.compare(body.password,mail.password)
                if (pass) {
                    res.send('login success')
                }else {throw Error('password incorrect')}
            }else {throw Error('your email not confirmed')}
        }else {
            throw Error('email incorrect')
        }
    } catch (error) {
        next(error)
    }
}

const getAll = async(req,res,next)=>{
    try {
        const data = await User.find()
            res.send(data)
    } catch (error) {
        next(error)
    }
}


module.exports = {addUser,login,getAll}