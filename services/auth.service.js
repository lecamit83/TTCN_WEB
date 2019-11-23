const { UserDAO } = require('../models');

const login = async (username, password, role) => {
  try {
    const user = await UserDAO.findByCredentials(username, password);
    if(user.role !== role) throw Error('Unauthorized');
    const token = await user.generateToken();
    return { token, user };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  login,

}