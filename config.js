module.exports = {
    api: {
        port: process.env.NODE_PORT || 3000,
        secret: process.env.JWT_SECRET || 'secreto'
    }
}