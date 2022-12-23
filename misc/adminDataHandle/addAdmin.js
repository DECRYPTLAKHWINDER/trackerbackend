const {admins}=require('../../mongoDB/adminModel')
const {adminAlready}=require('./alreadyAdmin')
const {validateAdd}=require('./validateAdminAdd')
const {encrypt}=require('../cryptography/encryptData')

const addAdmin=async(req)=>{
    const dataValid=await validateAdd(req);
    if(!dataValid)
    return [406,"incomplete data in request",""]

    const [dataAlready,statusMessage]=await adminAlready(req)
    if(dataAlready){
        const newAdmin=new admins({
            user:req.body.user,
            email:req.body.email,
            password:await encrypt(req.body.password)
        })
        try{
            await newAdmin.save()
            return [200,"","data saved"]
        }catch(e){
            console.log(e)
            return [500, "data not saved Try again",""]
        }
    }
    else{
        return [400,statusMessage,""]
    }
}

module.exports={addAdmin}