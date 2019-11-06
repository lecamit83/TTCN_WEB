const { SizeDAO } = require('../models');
const create = async (size) => {
  try {
    //validate here
    const result = await SizeDAO.create({size});
    return result;
  } catch (error) {
    throw error;
  }
}
const getAll = () => {
  return SizeDAO.find({});
}
const getOne = (sizeId) => {
  return SizeDAO.findById(sizeId);
}
module.exports = {
  create,
  getAll,
  getOne,

}