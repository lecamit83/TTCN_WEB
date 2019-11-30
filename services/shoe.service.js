const { ShoeDAO } = require('../models');

const validateData = (oldData, newData) => {
  return (newData === undefined) ? oldData : newData;
}

const updateOneById = async (id, name, price, desc, image, category, size, color) => {
  const oldShoe = ShoeDAO.findShoeById({ id });

  name = validateData(oldShoe.name, name);
  price = validateData(oldShoe.price, price);
  desc = validateData(oldShoe.desc, desc);
  category = validateData(oldShoe.category, category);
  size = validateData(oldShoe.size, size);
  color = validateData(oldShoe.color, color);
  image = validateData(oldShoe.image, image);

  if (image !== oldShoe.image) {

  }

  const conditions = {
    name: name, price: price, desc: desc, image: image, category: category, size: size, color: color
  };
  const newShoe = await ShoeDAO.updateOne({ _id: id }, { $set: conditions }, { multi: true }, (err) => {
    if (err) {
      throw err;
    }
  });
  return newShoe;
}

const getShoesByCatId = async (catId) => {
  try {
    const shoes = await ShoeDAO.findShoeByCatId(catId);
    return shoes;
  } catch (error) {
    throw error;
  }
}

const create = (name, price, desc, category, size, color) => {
  return ShoeDAO.create({ name, price, desc, category, size, color });
}
const getAll = () => {
  return ShoeDAO.findShoe({});
}

const getOne = (shoeId) => {
  return ShoeDAO.findShoeById(shoeId);
}

module.exports = {
  create,
  getAll,
  getOne,
  getShoesByCatId,
  updateOneById,
  validateData
}