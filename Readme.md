### Servervidor Nodejs con Express

# 1). Introducción a la implementacion del server-micro y su arquitectura

### Arquitectura de un Backend complejo

### Estructura de datos
 * se crea inicialmente una base de datos dummy para trabajar antes de conectar con una base de datos real, la base de datos 
 dummy se creo en la ruta ./store/dummy_db.js.
 ```js
    const store = require('../store/dummy_db')
    
    listarData = async (tabla) => {
      try {
        let response = await store.list(tabla)
        console.log(response)
        }
        catch(error){
        console.log(error.message)
        }
      }
        
    getId = async (tabla,id) => {
      try {
      let response = await store.get(tabla,id)
      console.log(response)
      }
      catch(error) {
        console.log(error.message)
      }
    }
      
    
    upsert = async (tabla,data) => {
      try {
       let response = await store.upsert(tabla,data)
       console.log(response)
      }
      catch(error) {
        console.log(error)
      } 
      }
      
    remove = async (tabla, id) => {
      try {
      let response = await store.remove(tabla,id)
      console.log(response)
      }
      catch(error) {
        console.log(error.message)
      }
    }
    
    query = async (tabla, q) => {
      try {
      let response = await store.query(tabla,q)
      }
      catch(error) {
         console.log(error.message)
      }    
}
    main = async () => {
     await listarData('user')
     console.log('.....')
     await remove('user', "5")
     console.log('.......')
     await listarData('user'
   }

  main()
 ```

# 2. Creando la estructura principal

### Api y rutas

### Aislar el codigo de la base de datos

### Rutas para usuarios

### Documentacion de nuestra API

# 3. Autenticación basada en tokens

### JWT: Gestión de acceso

### Autenticación: registro

### Autenticación: login

### Autenticación: cifrar contraseñas para evitar problemas de seguridad

### Autenticación: gestión de permisos

### Comprobar verificación con token

### Gestión avanzada de errores: Throw

# 4. Almacenando datos: MySql/Postgresql/Oracle/Mongo/Dummy

### Base de datos real: MySQL

### Completando la base de datos

### Relacionando entidades: follow

### Posts y likes

# 5. Microservicios en Node

### Microservicios: pros y contras

### Separando la base de datos a un microservicio

### Conectando con nuestro microservicio de datos

### Separando los posts a un microservicio

### Gestión de microservicios con PM2

# 6. Puesta en producción serverless

### Microservicios en Zeit Now, serverless y seguridad

### Variables de entorno en Now y despliegue local

# 7. Cacheando nuestra aplicación

### Caché como un microservicio. Redis

### Conectando el microservicio a Redis

### Conectar la API al caché

# 8. Puesta en producción en virtual machine

### Desplegando los servicios de Node

