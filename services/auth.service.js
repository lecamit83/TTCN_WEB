const { UserDAO } = require('../models');

const login = async (username, password) => {
  try {
    const result = await UserDAO.findByCredentials(username, password);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  login,

}