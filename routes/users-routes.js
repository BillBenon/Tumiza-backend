const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');
const fileUpload = require('../middlewares/file-upload');

const router = express.Router();

router.get('/', usersControllers.getUsers);

router.post('/signup',
    fileUpload.single('image'),
    [
        check('fullNames').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('phone').isMobilePhone().not().isEmpty(),
        check('username').not().isEmpty(),
        check('password').isLength({
            min: 6
        })
    ], usersControllers.signup);

router.post('/login', [
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 })
], usersControllers.login);

module.exports = router;