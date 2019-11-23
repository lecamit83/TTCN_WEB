var express = require('express');
const multer = require('multer');
var router = express.Router();
const { UserController } = require('../controllers');
const { AuthMiddleWare } = require('../middlewares');

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

/* GET users listing. */
router.route('/')
  .get(UserController.getUsers)
  .post(UserController.createUser);

router.route('/me')
  .get(AuthMiddleWare.isAuth, UserController.getCurrentUser);


router.route('/:id')
  .get(AuthMiddleWare.isAdmin, UserController.getUser);

router.route('/me/avatar')
  .put(AuthMiddleWare.isAuth, uploads.single('avatar'), UserController.uploadAvatar)

module.exports = router;
