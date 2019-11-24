const slugify = require('slugify');
const { ShoeDAO } = require('../models');

const create = (name, price, desc, category, size, color, kind, images) => {
  const slug = slugify(name, { lower: true });
  return ShoeDAO.create({ name, price, desc, category, size, color, kind, slug, images });
}
const getAll = ({ kind, q }) => {
  return ShoeDAO.findShoe({ kind, q });
}

const getOne = (shoeId) => {
  return ShoeDAO.findShoeById(shoeId)
}

const uploadImages = (files) => {
  return files.map(file => file.path);
}

module.exports = {
  create,
  getAll,
  getOne,
  uploadImages,
}