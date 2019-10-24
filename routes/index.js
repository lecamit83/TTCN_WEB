var express = require('express');
var router = express.Router();
const usersRoute = require('./users.route');
const authRoute = require('./auth.route');

router.use('/users', usersRoute);
router.use('/auth', authRoute);

module.exports = router;
