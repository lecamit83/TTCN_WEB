const { AuthService } = require('../services');

const login  = async (req , res) => {
  const { username, password } = req.body;
  try {
    const result = await AuthService.login(username, password);
    res.send(result);
  } catch (error) {
    res.status(404).send({ message : error.message});
  }
}

module.exports = {
  login,

}