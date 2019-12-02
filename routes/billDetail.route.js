const express = require('express');
const router = express.Router();

const { BillDetaiController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');

router.route('/:id')
  .get(AuthMiddleWare.isAuth, BillDetaiController.getAllByBillId);

module.exports = router;
