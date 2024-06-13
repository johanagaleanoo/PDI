const express= require ("express");
const router= express.Router ();
const controladores= require ("../usuario_controlador.js");

// usuarios
router.get ('/usuarios', controladores.obtener_usuarios);
router.get ('/usuarios/:id', controladores.obtener_id);
router.get ('/usuarios/insert', controladores.insertar_usuarios);
router.get ('/usuarios/delete', controladores.delete_usuarios);
router.get ('/usuarios/update', controladores.update_usuarios);

// productos 
router.get ('/productos', controladores.obtener_productos);
router.get ('/productos/:id', controladores.obtener_id_productos);
router.get ('/productos/insert', controladores.insertar_productos);
router.get ('/productos/update', controladores.update_productos);
router.get ('/productos/delete', controladores.delete_productos);

// pedidos
router.get ('/pedidos', controladores.obtener_pedidos);
router.get ('/pedidos/:id', controladores.obtener_id_pedidos);
router.get ('/pedidos/insert', controladores.insertar_pedidos);
router.get ('/pedidos/update', controladores.update_pedidos);
router.get ('/pedidos/delete', controladores.delete_pedidos);