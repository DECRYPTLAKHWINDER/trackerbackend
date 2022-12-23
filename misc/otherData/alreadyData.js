const {designations,reportingAuthorities,roles}=require('../../mongoDB/adminModel')

const designationAlready=async(req)=>{
    let already=await designations.find({designation:req.body.designation})
    if(already.length===0)
    return [true,"proceed"]
    else{
    return [false,"designation already taken"]
    }
}

const roleAlready=async(req)=>{
    let already=await roles.find({role:req.body.role})
    if(already.length===0)
    return [true,"proceed"]
    else{
    return [false,"role already taken"]
    }
}

const reportingAuthoritiesAlready=async(req)=>{
    let already=await reportingAuthorities.find({employeeId:req.body.employeeId})
    if(already.length===0)
    return [true,"proceed"]
    else
    return [false,"already taken"]
}

module.exports={designationAlready,reportingAuthoritiesAlready,roleAlready}