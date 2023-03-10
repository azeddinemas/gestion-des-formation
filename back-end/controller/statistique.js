const Formation = require('../model/Formation')
const User = require('../model/Usersmodel')
const organism = require('../model/Organism')

const statistique = async(req,res) =>{
    const f = await Formation.find().count()
    const u = await User.find().count()
    const e = await User.find({role:'employe'}).count()
    const o = await organism.find().count()
    res.json({f,u,o,e})
}

module.exports = {statistique}