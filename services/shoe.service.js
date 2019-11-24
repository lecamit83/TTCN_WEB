const slugify = require('slugify');
const { ShoeDAO } = require('../models');

const create = (name, price, desc, category, size, color, kind) => {
  const slug = slugify(name, { lower: true });
  return ShoeDAO.create({ name, price, desc, category, size, color, kind, slug });
}
const getAll = ({ kind, q }) => {
  return ShoeDAO.findShoe({ kind, q });
}

const getOne = (shoeId) => {
  return ShoeDAO.findShoeById(shoeId)
}

const uploadImages = (files) => {
  console.log(files);
  return [];
}

module.exports = {
  create,
  getAll,
  getOne,
  uploadImages,
}