const {employees}=require('../../mongoDB/adminModel')

const removeEmployee=async(req)=>{
    try{
        await employees.findOneAndDelete({employeeId:req.body.employeeId})
        return [200,'','successfully deleted employee']
    }catch(e){
        console.log(e)
        return [500,'Error occured while deleting employee','']
    }
}

module.exports={removeEmployee}