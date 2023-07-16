const { Router } = require('express');
const { userGet } = require('../controllers/user');

// Preparamos el enrutador
const router = Router();

// Ruta principal: /api/usuarios

router.get( '/', userGet );

module.exports = router;