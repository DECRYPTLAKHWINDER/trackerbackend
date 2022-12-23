const {employees}=require('../../mongoDB/adminModel')

const getId=async()=>{

    const lengthCollection=await employees.countDocuments()
    if(lengthCollection==0)
        return "DY001"
    else{
        const last=await employees.find().sort({createdOn:-1}).limit(1).select('employeeId')
        const length=parseInt(last[0].employeeId.substring(2,last[0].employeeId.length))
        const pattern1="DY"
        const pattern2="000"
        const employeeNo=length+1
        
        let digits=0
        let lengthDuplicate=length
        while(lengthDuplicate<=0){
            lengthDuplicate/=10
            digits+=1
        }
        return pattern1+pattern2.substring(0,2-digits)+employeeNo
    }
}

module.exports={getId}