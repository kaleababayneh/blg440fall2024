const express = require('express');
const router = express.Router();

const indexControllerGet = require('../controllers/indexController/get');

router.get('/', 
    indexControllerGet
);

module.exports = router;