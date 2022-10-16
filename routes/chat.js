 const { Router } = require("express");
const { getMensaje, getMensajes, addMensaje } = require("../sockets/controller");

 const router = Router();

router.get('/', getMensajes);
router.get('/:email', getMensaje);
router.post('/', addMensaje);


module.exports = router