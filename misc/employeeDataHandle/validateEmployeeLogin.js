const validateLogin = async (req) => {
    if (JSON.stringify(req.body) === '{}')
        return false
    else if (!req.body.loginId && !req.body.password)
        return false
    else
        return true
}

module.exports = { validateLogin }

