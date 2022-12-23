const {admins}=require('../../mongoDB/adminModel')

const adminAlready=async(req)=>{
    let already=await admins.find({user:req.body.user})
    if(already.length===0){
        already=await admins.find({email:req.body.email})
        if(already.length===0){
            return [true,"proceed"]
        }
        else 
        return [false,"email already taken"]
    }
    else
    return [false,"username already taken"]
}

module.exports={adminAlready}