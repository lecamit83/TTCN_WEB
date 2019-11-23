const express = require('express');
const router = express.Router();

const { ShoeController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  return cb(null, (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'));
}
const uploads = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 3
  }
})

router.route('/')
  .get(ShoeController.getAll)
  .post(ShoeController.create)

router.post('/images', AuthMiddleWare.isAdmin, uploads.array('shoeImages'), ShoeController.uploadImages);

router.route('/:shoeId')
  .get(ShoeController.getOne)
  .put()
  .delete();

module.exports = router;