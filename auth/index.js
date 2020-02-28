const jwt = require('jsonwebtoken')
const config = require('../config')

const secret = config.api.secret

function sign(data) {
    return jwt.sign(data, secret)
}

function verify(token) {
    return jwt.verify(token, secret )
}

const check = {
    own: function(req, owner) {
        try {
            const decode = decodeHeader(req)
            console.log('decode:', decode)
            if(decode.id !== owner) {
                throw new Error("No Authorized!!!",401)
            }
            return true

        }
        catch(error) {
            throw new Error(error.message)   
        }
    }

}

function getToken(auth) {
    if(!auth) {
        throw new Error('No viene token :(', 402)
    }

    if(auth.indexOf('Bearer ') === -1) {
        throw new Error("Formato no valido")
    }

    return auth.replace("Bearer ", "")
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || "";
    console.log('Authorization:',authorization)
    const token = getToken(authorization)
    const decoded = verify(token)
    req.user = decoded
    return decoded
}

module.exports = {
    sign,
    check
}
