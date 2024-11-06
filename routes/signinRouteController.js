const express = require('express');
const router = express.Router();

const signinControllerGet = require('../controllers/signinController/get');
const signinControllerPost = require('../controllers/signinController/post');

router.post('/', 
    signinControllerPost
);

router.get('/',
   signinControllerGet
);

module.exports = router;