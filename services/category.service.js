const { CategoryDAO } = require('../models');

// const deleteOneById = (_id) => {
//   try {
//     return CategoryDAO.deleteOne({ _id }, (err, result) => {
//       if (err) {
//         throw err;
//       }
//       return result;
//     });
//   } catch (error) {
//     throw error;
//   }
// }

const updateOneById = async (_id, name) => {
  const category = new CategoryDAO({ name: name });
  await CategoryDAO.updateOne({ _id: _id }, { $set: { name: name } }, { multi: true }, (err) => {
    if (err) {
      throw err;
    }
  });
  return category;
}

const getOne = async (_id) => {
  try {
    const category = await CategoryDAO.findOne({ _id });
    return category || null;
  } catch (error) {
    throw error;
  }
}

const create = async (name) => {
  try {
    //validate here
    const result = await CategoryDAO.create({ name });
    return result;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const categories = await CategoryDAO.find({});
    return categories || null;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create,
  getAll,
  getOne,
  updateOneById,
}