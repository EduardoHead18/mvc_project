const UserController = require('../Users');
const express = require('express');

const router = express.Router();
router.get('/users',UserController.findAllUser);
router.get('/user',UserController.findById);
router.post('/post',UserController.postUsers);
router.delete('/delete',UserController.deleteUser);

module.exports = router;