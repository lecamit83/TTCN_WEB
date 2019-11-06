const express = require('express');
const router = express.Router();
const { CategoryController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');
router.route('/')
  .get(CategoryController.getAll)
  .post(AuthMiddleWare.isAdmin, CategoryController.create)
  .put()
  .delete();

module.exports = router;