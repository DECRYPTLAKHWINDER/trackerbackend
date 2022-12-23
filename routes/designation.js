const express=require('express')
const router=express.Router()
const checkAuth=require('../middleware/auth')
const jwt=require('jsonwebtoken')
const req = require('express/lib/request')

const { addDesignation } = require('../misc/otherData/addMember');
const {roles,admins,designations,employees}=require('../mongoDB/adminModel')

router.get('/',async(req,res,next)=>{
    try{
        const allDesignations = await designations.find()
        res.status(200).end(JSON.stringify({ error: "", data: allDesignations }))
        }catch(e){
            res.status(419).end(JSON.stringify({ error: "unable to get data", data: "" }))
        }
})

router.post('/login',async(req,res,next)=>{
    
})

router.post('/',async(req,res,next)=>{
    const [statusCode,errorMesssage,dataMessage]=await addDesignation(req)
    res.status(statusCode).end(JSON.stringify({error:errorMesssage,data:dataMessage}))
})

// router.put('/',checkAuth,async(req,res,next)=>{
   
// })

module.exports=router