const { SizeService } = require('../services');
const create = async (req, res) => {
  const { size } = req.body;
  try {
    const result = await SizeService.create(size);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const getAll = async (req, res) => {
  try {
    const results = await SizeService.getAll();
    res.status(201).json(results);
  } catch (error) {
    res.status(404).json(error.message);
  }
}
const getOne = async (req, res) => {
  const { sizeId } = req.params;
  try {
    const result = await SizeService.getOne(sizeId);
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