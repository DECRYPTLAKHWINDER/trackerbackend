const {employees}=require('../../mongoDB/adminModel')

const employeeAlready=async(req)=>{
    let already=await employees.find({employeeId:req.body.employeeId})
    if(already.length===0){
        already=await employees.find({email:req.body.email})
        if(already.length===0){
            return [true,"proceed"]
        }
        else
        return [false,"email already taken"]
    }
    else
    return [false,"employeeId already taken"]
}

const updateEmployeeAlready=async(req)=>{
    let x
    let already=await employees.find({employeeId:req.body.employeeId})
    if(already.length!==0){
        if(already[0].email==req.body.email)
        return [true,"proceed"]
        else{
        x=await employees.find({email:req.body.employeeId})
        if(x.length==0)
        return [true,"proceed"]
        else
        return [false,"email Id already taken"]
        }
    }
    else
    return [false,"employeeId not present"]
}

module.exports={employeeAlready,updateEmployeeAlready}