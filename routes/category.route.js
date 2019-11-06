const express = require('express');
const router = express.Router();
const { CategoryController } = require('../controllers');

router.route('/')
  .get(CategoryController.getAll)
  .post(CategoryController.create)
  .put()
  .delete();

module.exports = router;