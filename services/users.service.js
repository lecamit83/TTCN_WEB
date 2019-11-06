const { UserDAO } = require('../models');

const getUsers = async () => {
  // Validation
  try {
    // DB
    const results = await UserDAO.find({}).where('role').equals('user');
    return results;
  } catch (error) {
    throw error;
  }
}

const createUser = async (body) => {
  try {
    const result = await UserDAO.create(body);
    return result;
  } catch (error) {
    throw error;
  }
}

const getUser = async () => {
  
}
module.exports = {
  getUsers,
  createUser,

}