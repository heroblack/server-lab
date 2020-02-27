const TABLA ='auth'
const bcrypt = require('bcrypt')
const auth = require('../../../auth')


module.exports = function(injectStored) {
    let store = injectStored;
    if(!store) {
        store = require("../../../store/dummy_db")
    }


    async function login(username, password) {
        const data = await store.query(TABLA,{username: username})
        
        if(!data) {
            throw new Error('username no encontrado!!')
        }
        const equals = await bcrypt.compare(password, data.password)
        if(!equals) {
            throw new Error('informacion invalida!!')
            return
        }

        return auth.sign(data)
    }

    async function upsert(data) {
         const authData = {
             id: data.id
         }

         if(data.username) {
             authData.username = data.username
         }

         if(data.password) {
             authData.password = await bcrypt.hash(data.password,10)
         }

         return store.upsert(TABLA, authData)
    }

    return {
        upsert,
        login
    }
  

}