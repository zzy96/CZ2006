var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/driver', ctrlMain.driver);
router.get('/admin', ctrlMain.admin);
router.get('/login', ctrlMain.login);

module.exports = router;