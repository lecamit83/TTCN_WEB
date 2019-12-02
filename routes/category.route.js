const express = require('express');
const router = express.Router();

const { CategoryController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');

router.route('/')
  .get(CategoryController.getAll)
  .post(AuthMiddleWare.isAdmin, CategoryController.create);

router.route("/:id")
  .put(AuthMiddleWare.isAdmin, CategoryController.updateOneById)
  .get(CategoryController.getOne);

module.exports = router;
