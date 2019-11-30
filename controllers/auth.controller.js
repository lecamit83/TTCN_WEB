const { AuthService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await AuthService.login(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
}

module.exports = {
  login,
}
