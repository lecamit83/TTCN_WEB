const express = require('express');
const router = express.Router();
const { SizeController } = require('../controllers');

router.route('/')
  .get(SizeController.getAll)
  .post(SizeController.create)
  .put()
  .delete();
router.route('/:sizeId')
  .get(SizeController.getOne)
  .put()
  .delete();
module.exports = router;