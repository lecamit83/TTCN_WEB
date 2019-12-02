const express = require('express');
const router = express.Router();

const { BillController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');

router.route('/')
  .get(BillController.getAll)
  .post(AuthMiddleWare.isAuth, BillController.createBill);

router.route('/:id')
  .get(BillController.getOne);

module.exports = router;
