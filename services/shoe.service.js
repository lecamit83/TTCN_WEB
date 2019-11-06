const { ShoeDAO } = require('../models');
const create = (name, price, desc, category, size, color) => {
  return ShoeDAO.create({ name, price, desc, category, size, color });
}
const getAll = () => {
  return ShoeDAO.findShoe({});
}

const getOne = (shoeId) => {
  return ShoeDAO.findShoeById(shoeId)
}

module.exports = {
  create,
  getAll,
  getOne,
}