const { ShoeDAO } = require('../models');
const create = (name, price, desc, category, size, color) => {
  return ShoeDAO.create({ name, price, desc, category, size, color });
}
const getAll = () => {
  return ShoeDAO.findAll();
}

module.exports = {
  create,
  getAll,
}