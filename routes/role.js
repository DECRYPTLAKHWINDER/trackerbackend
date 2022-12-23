const express=require('express')
const router=express.Router()
const checkAuth=require('../middleware/auth')
const jwt=require('jsonwebtoken')
const req = require('express/lib/request')

const {roles,admins,designations,employees}=require('../mongoDB/adminModel')
const {addRole}=require('../misc/otherData/addMember')

router.get('/',async(req,res,next)=>{
    try {
        const role = await roles.find()
        res.status(200).end(JSON.stringify({ error: "", data: role }))
    } catch (e) {
        res.status(419).end(JSON.stringify({ error: "unable to get data", data: "" }))
    }
})

router.post('/',async(req,res,next)=>{
    const [statusCode,errorMesssage,dataMessage]=await addRole(req)
    res.status(statusCode).end(JSON.stringify({error:errorMesssage,data:dataMessage}))
})

// router.put('/',checkAuth,async(req,res,next)=>{
   
// })

module.exports=router