const nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    service:'proton.me',
    auth:{
        user:'sunil.decrypt@proton.me',
        pass:'Sunil123@#'
    }
})
module.exports=transporter