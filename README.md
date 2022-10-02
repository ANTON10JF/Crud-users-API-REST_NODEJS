# API REST

En la variable de entorno hemos conectado una base de datos. 
Mediante las siguiente url consumimos, creamos, modificamos y eliminamos resgistros de la base de datos conectada. 

GET
http://localhost:3000/api/list
POST
http://localhost:3000/api/new         (enviamos formato Json en el body de la petición los datos de registro) 
PUT
http://localhost:3000/api/update/6.   (enviamos formato Json en el body de la petición los datos a modificar)
DELETE
http://localhost:3000/api/delete/9
