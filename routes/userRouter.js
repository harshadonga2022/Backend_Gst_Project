var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');
var authToken = require('../middleware/authToken.js');

/* Rigister/SignUp user create API*/
router.post('/register', userController.registerUser );

/* Login user create API*/
router.post('/login', userController.loginUser) ;

/* All user data get API*/
router.get('/', authToken.SecureToken, userController.getAllUser );

/* one user data get API*/
router.get('/get/:id', authToken.SecureToken, userController.getUser );

/* Delete user API*/
router.delete('/delete', authToken.SecureToken, userController.deleteUser) ;

/* Update user API*/
router.patch('/update', authToken.SecureToken, userController.updateUser) ;

module.exports = router;
