const { UserDAO } = require('../models');

const login = async (username, password) => {
  try {
    const user = await UserDAO.findByCredentials(username, password);
    const token = await user.generateToken();
    return { token, user };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  login,

}