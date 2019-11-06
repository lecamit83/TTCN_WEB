const { ColorDAO } = require('../models');
const create = async (name) => {
  try {
    //validate here
    const result = await ColorDAO.create({name});
    return result;
  } catch (error) {
    throw error;
  }
}
const getAll = () => {
  return ColorDAO.find({});
}
const getOne = (sizeId) => {
  return ColorDAO.findById(sizeId);
}
module.exports = {
  create,
  getAll,
  getOne,

}