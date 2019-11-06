var express = require('express');
var router = express.Router();
const usersRoute = require('./users.route');
const authRoute = require('./auth.route');
const categoryRoute = require('./category.route');
const colorRoute = require('./color.route');
const sizeRoute = require('./size.route');

router.use('/users', usersRoute);
router.use('/auth', authRoute);
router.use('/categories', categoryRoute);
router.use('/sizes', sizeRoute);
router.use('/colors', colorRoute);


module.exports = router;
