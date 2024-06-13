const express= require ('express');
const router= express.Cons ();
const promiseQuery= require ('../config/data_base');

// controladores
// todos los productos
const obtener_productos= async (req, res) => {
    try {
        const query= "select * from productos";
        const productos= await promiseQuery (query);
        res.json (productos);
    } 
    catch (error) {
        throw error;
    }
}

// productos por id
const obtener_id_productos= async (req, res) => {
    try {
        const { id }= req.params;
        const query= "select * from productos where id= ?";
        const productos= await promiseQuery (query, [id]);
        res.json (productos);        
    } 
    catch (error) {
        throw error;
    }
}

// insertar productos
const insertar_productos= async (req, res) => {
    try {
        const { nombre, precio, stock }= req.body
        const query= "insert into productos (nombre, precio, stock) values (?, ?, ?)";
        await promiseQuery (query, [nombre, precio, stock]);
        res.json ({ message: "producto ingresado" });
    } 
    catch (error) {
        throw error;
    }
}

// actualizar productos
const update_productos= async (req, res) => {
    try {
        const { id }= req.params;
        const { nombre, precio, stock }= req.body;
        const query= "update productos set nombre=?, precio=?, stock=? where id=?"
    } 
    catch (error) {
        throw error;
    }
}

// eliminar productos
const delete_productos= async (req, res) => {
    try {
        const { id }= req.params;
        const query= "delete from productos where id= ?";
        const productos= await promiseQuery (query, [id, nombre, precio, stock]);
        res.json (productos);
    } 
    catch (error) {
        throw error;
    }
}

module.exports= {
    obtener_productos,
    obtener_id_productos,
    insertar_productos,
    update_productos,
    delete_productos
}