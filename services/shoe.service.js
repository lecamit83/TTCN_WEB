const { ShoeDAO } = require('../models');
const create = (name, price, desc, category, size, color) => {
  return ShoeDAO.create({ name, price, desc, category, size, color });
}

module.exports = {
  create,
}