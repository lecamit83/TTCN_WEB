const { UserService } = require('../services');

const getUsers = async (req, res) => {
  try {
    const results = await UserService.getUsers();
    res.send(results)
  } catch (error) {
    res.send(error);
  }
}

const createUser = async (req, res) => {
  const { email, password, last_name, first_name, phone } = req.body;
  try {
    const result = await UserService.createUser({
      email : email, 
      password : password, 
      last_name : last_name,
      first_name : first_name,
      phone : phone,
      role : 'user',
    });
    res.send(result);
  } catch (error) {
    throw error;
  }

}

module.exports = {
  getUsers,
  createUser,
}