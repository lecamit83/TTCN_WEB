const { UserDAO } = require('../models');
const SALT_ROUND = 10;
const bcrypt = require('bcrypt');

const getUsers = async () => {
  // Validation
  const results = await UserDAO.find({}).where('role').equals('user');
  return results;
}

const createUser = async (body) => {
  const result = await UserDAO.create(body);
  return result;
}

const getUser = async (id) => {
  const result = await UserDAO.findById(id);
  return result;
}

async function uploadAvatar(user, path) {
  user.avatar = path;
  await UserDAO.updateOne({ _id: user._id }, user);
  return user;
}

const updateCurrentUser = async (user, last, first, pass, phone) => {
  if (!!last) user.last_name = last;
  if (!!first) user.first_name = first;
  if (!!pass) {
    user.password = await bcrypt.hash(pass, SALT_ROUND);
  }
  if (!!phone) user.phone = phone;
  await UserDAO.updateOne({ _id: user._id }, user);

  return user;
}

module.exports = {
  getUsers,
  createUser,
  uploadAvatar,
  getUser,
  updateCurrentUser,

}