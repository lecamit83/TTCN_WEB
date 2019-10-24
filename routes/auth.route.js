var express = require('express');
var router = express.Router();
const { AuthController } = require('../controllers');

/* GET users listing. */
router.route('/')
  .post(AuthController.login);

module.exports = router;
