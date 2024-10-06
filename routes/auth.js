/*
    Auth routes
    host + /api/auth

*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/field-validators');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/jwt-validator');
const router = Router();

router.post(
    '/new', 
    [// Middlewares
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 }),
        validateFields
    ] ,
    createUser);
router.post(
    '/', 
    [
        check('email', 'The email is required').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 }),
        validateFields
    ], 
    loginUser);
router.get('/renew', validateJWT,renewToken);

module.exports = router;