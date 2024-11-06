const express = require('express');
const router = express.Router();

const signupControllerGet = require('../controllers/signupController/get');
const signupControllerPost = require('../controllers/signupController/post');

router.get('/',
    signupControllerGet
);

router.post('/', 
    signupControllerPost
);

module.exports = router;
