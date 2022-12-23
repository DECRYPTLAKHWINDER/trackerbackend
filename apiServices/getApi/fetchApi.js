const getDesignations = async () => {
    const data = await fetch("http://localhost:3012/getDesignations")
    return data
}

const getAdmin = async () => {
    const data = await fetch("http://localhost:3012/getAdmin")
    return data
}

const getManagerDesignations = async () => {
    const data = await fetch("http://localhost:3012/designation/manager")
    return data
}

const getTeamMembersDesignation = async () => {
    const data = await fetch("http://localhost:3012/designation/teammember")
    return data
}

const getManager = async () => {
    const data = await fetch("http://localhost:3012/getManager")
    return data
}

const getRole = async () => {
    const data = await fetch("http://localhost:3012/getRole")
    return data
}

const getEmployees = async () => {
    const data = await fetch("http://localhost:3012/getEmployees")
    return data
}

module.exports={getAdmin,getDesignations,getEmployees,getManager,getManagerDesignations,getRole,getTeamMembersDesignation}
