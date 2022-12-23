const mongoose = require("mongoose")

const designationData=async(req)=>{
    if(JSON.stringify(req.body)==='{}')
    return false
    else if(!req.body.designation || !req.body.roleId)
    return false
    else
    return true
}

const roleData=async(req)=>{
    if(JSON.stringify(req.body)==='{}')
    return false
    else if(!req.body.role)
    return false
    else
    return true
}

const reportingAuthorityData=async(req)=>{
    if(JSON.stringify(req.body)==='{}')
    return false
    else if(!req.body.roleId || !req.body.name || !req.body.employeeId)
    return false
    else
    return true
}

module.exports={designationData,reportingAuthorityData,roleData}