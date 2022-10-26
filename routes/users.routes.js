const { Router } = require("express");
const router = new Router();
const { getUser, createUser } = require("../controllers/users.controllers");

//User api rest
router.get('/usuarios', getUser);
router.post('/agregar', createUser);

module.exports = router;