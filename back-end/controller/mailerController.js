const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const ls = require('local-storage')



let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'maslouhazeddine@gmail.com',
        pass: 'mzxzsukrytpijqvn',
    },
});



const main = () => {
    const email = ls('email')
    const emt = jwt.sign({ email }, process.env.SECRET_KEY)
    const link = "http://localhost:7000/api/auth/confirmation/" + emt

    transporter.sendMail({
        from: '"azeddine" <maslouhazeddine@gmail.com>',
        to: ls('email'),
        subject: "email verification ✔",
        html: '<b>Hello we just got a request to create an account with this email, please verify in this link <a href=' + link + '>confirm it</a></b>',
    })
}

const confirm = () =>{
    const token = req.params.token
    const eml = jwt.verify(token, process.env.SECRET_KEY)
    User.findOneAndUpdate({ email: eml.email }, { confirmed: true }).then(() => {
        ls('ver','email verifie success')
        res.redirect('http://localhost:3000/login')
    }).catch(() => {
        console.log('not confirmed')
    })
}

module.exports = {confirm,main}