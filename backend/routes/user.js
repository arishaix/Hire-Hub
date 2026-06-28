const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const validate = require('../middleware/validation')

router.post('/register' , validate.validateRegister, userController.registerUser);
router.post('/login' , validate.validateLogin , userController.loginUser);

module.exports = router