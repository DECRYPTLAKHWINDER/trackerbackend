const {admins}=require('../../mongoDB/adminModel')
const {validateAdd}=require('./validateAdminAdd')
const {adminAlready}=require('./alreadyAdmin')

const updateAdmin=async(req)=>{
    const dataValid=await validateAdd(req);
    if(!dataValid)
    return [406,"incomplete data in request",""]

    const [dataAlready,statusMessage]=await updateAdminAlready(req)
    if(dataAlready){
        try{
            await admins.findOneAndUpdate(req.body._id,req.body)
            return [200,"","Admin Data updated"]
        }catch(e){
            return [500,"Error, Data not Updated",""]
        }
    }
    else{
        return [400,statusMessage,""]
    }
}

module.exports={updateAdmin}