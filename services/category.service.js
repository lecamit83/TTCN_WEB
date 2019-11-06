const { CategoryDAO } = require('../models');
const create = async (name) => {
  try {
    //validate here
    const result = await CategoryDAO.create({name});
    return result;
  } catch (error) {
    throw error;
  }
}

const getAll = () => {
  return CategoryDAO.find({});
}
module.exports = {
  create,
  getAll,
  
}