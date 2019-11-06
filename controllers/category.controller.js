const { CategoryService } = require('../services');
const create = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await CategoryService.create(name);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const getAll = async (req, res) => {
  try {
    const results = await CategoryService.getAll();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

module.exports = {
  create,
  getAll,

}