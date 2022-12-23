const mongoose=require('mongoose')
const {reportingAuthorities,designations,roles}=require('../../mongoDB/adminModel')
const {reportingAuthorityData,designationData,roleData}=require('./validateDataAdd')
const {reportingAuthoritiesAlready,designationAlready}=require('./alreadyData')


const addReportingAuthorities=async(req)=>{
    const reportingAuthorityDataValid=await reportingAuthorityData(req) 
    if(!reportingAuthorityDataValid)
    return [false,"incomplete data in request"]

    const [dataNotAlready,statusMessage]=await reportingAuthoritiesAlready(req)
    if(dataNotAlready){
        const newReportingAuthority=new reportingAuthorities({
            employeeId:req.body.employeeId,
            name:req.body.name,
            roleId:req.body.roleId
        })
        try{
            await newReportingAuthority.save()
            return [true,"data saved"]
        }
        catch(e){
            return [false,"data not saved"]
        }
    }
    else{
        return [false,statusMessage]
    }
}

const addRole = async (req) => {
    const validStatus=await roleData(req)
    if (!validStatus)
        return [406,"incomplete data in request",""]

    const [dataNotAlready, statusMessage] = await roleAlready(req)
    if (dataNotAlready) {
        try {
            const newRole = new roles({
                role: req.body.role
            })
            await newRole.save()
            return [200,"","data saved"]
        } catch (e) {
            return [500, "data not saved Try again",""]
        }
    }
    else {
        return [400,statusMessage,""]
    }
}

const addDesignation = async (req) => {
    const validStatus=await designationData(req)
    if (!validStatus)
        return [406,"incomplete data in request",""]

    const [dataNotAlready, statusMessage] = await designationAlready(req)
    if (dataNotAlready) {
        try {
            const newDesignation = new designations({
                designation: req.body.designation,
                roleId: req.body.roleId
            })
            await newDesignation.save()
            return [200,"","data saved"]
        } catch (e) {
            return [500, "data not saved Try again",""]
        }
    }
    else {
        return [400,statusMessage,""]
    }
}

module.exports={addReportingAuthorities,addDesignation,addRole};