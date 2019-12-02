var express = require('express');
var router = express.Router();

const usersRoute = require('./users.route');
const authRoute = require('./auth.route');
const categoryRoute = require('./category.route');
const colorRoute = require('./color.route');
const sizeRoute = require('./size.route');
const shoeRoute = require('./shoe.route');
const billRoute = require('./bill.route');
const billDetailRoute = require('./billDetail.route');

router.use('/users', usersRoute);
router.use('/auth', authRoute);
router.use('/categories', categoryRoute);
router.use('/sizes', sizeRoute);
router.use('/colors', colorRoute);
router.use('/shoes', shoeRoute);
router.use('/bills', billRoute);
router.use('/bill-details', billDetailRoute);

module.exports = router;
