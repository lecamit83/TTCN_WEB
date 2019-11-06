const express = require('express');
const router = express.Router();
const { ColorController } = require('../controllers');

router.route('/')
  .get(ColorController.getAll)
  .post(ColorController.create)
  .put()
  .delete();

router.route('/:colorId')
  .get(ColorController.getOne)
  .put()
  .delete();

module.exports = router;