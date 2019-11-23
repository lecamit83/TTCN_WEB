const { UserDAO } = require('../models');

const getUsers = async () => {
  // Validation
  const results = await UserDAO.find({}).where('role').equals('user');
  return results;
}

const createUser = async (body) => {
  const result = await UserDAO.create(body);
  return result;
}

const getUser = async () => {

}

async function uploadAvatar(user, path) {
  user.avatar = path;
  await UserDAO.updateOne({ _id: user._id }, user);
  return user;
}

module.exports = {
  getUsers,
  createUser,
  uploadAvatar,
}