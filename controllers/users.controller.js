const { UserService } = require('../services');

const getUsers = async (req, res) => {
  try {
    const results = await UserService.getUsers();
    res.send(results)
  } catch (error) {
    res.send(error);
  }
}

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await UserService.getUser(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error);
  }
}

const createUser = async (req, res) => {
  const { email, password, last_name, first_name, phone, role } = req.body;
  try {
    const result = await UserService.createUser({
      email: email,
      password: password,
      last_name: last_name,
      first_name: first_name,
      phone: phone,
      role: role || 'user',
    });
    res.send(result);
  } catch (error) {
    res.status(404).json(error);
  }
}

const uploadAvatar = async (req, res) => {
  const { user, file } = req;
  try {
    const result = await UserService.uploadAvatar(user, file.path);
    res.send(result);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getCurrentUser = (req, res) => {
  const { user } = req;
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
}

module.exports = {
  getUsers,
  createUser,
  uploadAvatar,
  getUser,
  getCurrentUser,
}