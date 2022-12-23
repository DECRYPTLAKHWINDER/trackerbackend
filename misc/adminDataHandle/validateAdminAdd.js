const validateAdd=async(req)=>{
    if(JSON.stringify(req.body)==='{}')
    return false
    else if(!req.body.email || !req.body.password || !req.body.user )
    return false
    else
    return true
}

module.exports={validateAdd}