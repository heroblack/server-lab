const user = require('../api/component/users/network')
const auth = require('../api/component/auth/network')

module.exports = function routes (server)  {
    server.use('/api/users', user)
    server.use('/api/auth', auth)
}