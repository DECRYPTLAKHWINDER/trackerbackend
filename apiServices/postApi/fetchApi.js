const getDesignation = async (rawData) => {
    const data = await fetch("http://localhost:3012/getDesignation", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
    })
    return data
}


const addEmployee = async (rawData) => {
    const data = await fetch("http://localhost:3012/addEmployee", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
    })
    return data
}

const addAdmin = async (rawData) => {
    const data = await fetch("http://localhost:3012/addAdmin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
    })
    return data
}

const adminLogin = async (rawData) => {
    const data = await fetch("http://localhost:3012/adminLogin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
    })
    return data
}

const addDesignation = async (rawData) => {
    const data = await fetch("http://localhost:3012/adminLogin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
    })
    return data
}

const addRole = async (rawData) => {
    const data = await fetch("http://localhost:3012/addRole", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
    })
    return data
}

module.exports={getDesignation,addAdmin,addDesignation,addEmployee,addRole}