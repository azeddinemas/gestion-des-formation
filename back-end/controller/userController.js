const User = require('../model/Usersmodel')
const bcrypt = require('bcryptjs')
const mailer = require('./mailerController')
const ls = require('local-storage')
const organism = require('../model/Organism')

const addUser = async(req,res,next)=>{

    const {body} = req;
    try {
        const mail = await User.findOne({email : body.email})
        if (!mail) {
            ls('email',body.email)
            mailer.main()
            const hash = await bcrypt.hash(body.password,10)
            const data = await User.create({...body,role : 'admin',password:hash})
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
                if (mail.active) {
                    const pass = await bcrypt.compare(body.password,mail.password)
                    if (pass) {
                        res.send(mail.role)
                    }else {throw Error('password incorrect')}
                }else {throw Error('votre compte is desactive')}
            }else {throw Error('your email not confirmed')}
        }else {throw Error('email incorrect')}
    } catch (error) {
        next(error)
    }
}

const getAll = async(req,res,next)=>{
    try {
        const data = await User.find({role : 'employe'})
        .populate({
            path : 'organism',
            model : organism
        })
        res.send(data)
    } catch (error) {
        next(error)
    }
}

const banieCompte = async(req,res,next)=>{
    try {
        const id = req.params.id
        const data = await User.findById({_id : id})
        if (data.active) {
            const e = await User.updateOne({_id : id},{active : false})
            res.send('desactive avec success')
        }else {
            const e = await User.updateOne({_id : id},{active : true})
            res.send('active success')
        }
    } catch (error) {
        next(error)
    }
    
}


module.exports = {addUser,login,getAll,banieCompte}