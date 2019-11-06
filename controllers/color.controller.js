const { ColorService } = require('../services');
const create = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await ColorService.create(name);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const getAll = async (req, res) => {
  try {
    const results = await ColorService.getAll();
    res.status(201).json(results);
  } catch (error) {
    res.status(404).json(error.message);
  }
}
const getOne = async (req, res) => {
  const { colorId } = req.params;
  try {
    const result = await ColorService.getOne(colorId);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
}
module.exports = {
  create,
  getAll,
  getOne,

}