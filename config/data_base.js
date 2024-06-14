const mysql= require ('mysql');
const { promisify }= require ('util');

const data_base= mysql.createPool ({
    host: "127.0.0.1",
    user: "root",
    password: '',
    database: "usuarios",
    // limitar el numero de las conexiones en simultaneo
    connectionLimit: 10,
})

const promiseQuery= promisify (data_base.query).bind (data_base);

data_base.getConnection ((error, connection) => {
    if (error) throw error

    connection.query (
        'create table if not exists usuarios (id int not null auto_increment, nombre varchar (100) not null, apellido varchar (100) not null, gmail varchar (255) not null, contraseña varchar(100) not null, primary key (id))'
    )
})

module.exports= promiseQuery;