
const db = {
    user: [
        {id:"1", name:"Fabio", username:"hackchan"},
        {id:"2", name:"Neyla", username:"sargento"},
        {id:"3", name:"Daniel", username:"pro"},
        {id:"5", name:"Jana", username:"janis"},
        {id:"4", name:"David", username:"hacker"},
    ],
    // auth: [
    //     {
    //       id: 'NIWTTsuQcrXwB0Kku46sv',
    //       username: 'cr7',
    //       password: '$2b$10$A4hJUyw/3fQ2aLxGUn6cpuBNmLS8S42b6y6sCWqaskYMLgQc3j.Fe'
    //     }
    //   ]
    
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
    console.log('db:', db)
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

   return col.filter(item => item[key] === q[key])[0] || null
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query

}
