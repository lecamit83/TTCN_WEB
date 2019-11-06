const express = require('express');
const router = express.Router();

const { ShoeController } = require('../controllers');

router.route('/')
  .get(ShoeController.getAll)
  .post(ShoeController.create)

module.exports = router;