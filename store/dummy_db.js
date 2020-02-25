
const db = {
    user: [
        {id:"1", name:"Fabio", username:"hackchan"},
        {id:"2", name:"Neyla", username:"sargento"},
        {id:"3", name:"Daniel", username:"pro"},
        {id:"5", name:"Jana", username:"janis"},
        {id:"4", name:"David", username:"hacker"},
    ]
}

list = async (tabla) => {
    return db[tabla] || []
} 

get = async (tabla, id) => {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null
}

upsert = async (tabla, data) => {
    if(!db[tabla]) {
        db[tabla] = []
    }

    db[tabla].push(data)
    return data
}

remove = async (tabla, id) => {
    let col = await list(tabla);
    let indice = col.findIndex((data)=> data.id == id)
    /*
    for(let n in col) {
        if(col[n].id==id) {
            indice = n;
            break;} 
     }*/
    return db[tabla].splice(indice, 1)
}

query = async (tabla, q) => {
   let col = await list(tabla)
   let keys = Object.keys(q)
   let key = keys[0]

   return col.filter(item => new RegExp(item[key], "i") === new RegExp(q[key], "i"))[0] || null
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query

}
