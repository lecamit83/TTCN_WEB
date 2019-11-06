const express = require('express');
const router = express.Router();
const { SizeController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');
router.route('/')
  .get(SizeController.getAll)
  .post(AuthMiddleWare.isAdmin, SizeController.create)
  .put()
  .delete();
router.route('/:sizeId')
  .get(SizeController.getOne)
  .put()
  .delete();
module.exports = router;