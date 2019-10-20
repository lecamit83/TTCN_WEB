var express = require('express');
var router = express.Router();
const { UserController } = require('../controllers');

/* GET users listing. */
router.route('/')
  .get(UserController.getUsers)
  .post(UserController.createUser);

module.exports = router;
