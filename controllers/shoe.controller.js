const { ShoeService } = require('../services');
const create = async (req, res) => {
  const { name, price, category, desc, size, color } = req.body;
  try {
    const result = await ShoeService.create(name, price, desc, category, size, color);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getAll = async (req, res) => {
  try {
    const results = await ShoeService.getAll();
    res.status(201).json(results);
  } catch (error) {
    res.status(404).json(error);
  }
}

module.exports = {
  create,
  getAll
}