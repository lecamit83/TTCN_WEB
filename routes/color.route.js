const express = require('express');
const router = express.Router();
const { ColorController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');
router.route('/')
  .get(ColorController.getAll)
  .post(AuthMiddleWare.isAdmin, ColorController.create)
  .put()
  .delete();

router.route('/:colorId')
  .get(ColorController.getOne)
  .put()
  .delete();

module.exports = router;