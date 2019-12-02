const { CategoryService } = require('../services');

const updateOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const cate = CategoryService.updateOneById(id, name);
    if (cate.name != null) {
      res.sendStatus(200);
      return;
    }
    res.sendStatus(400);
  } catch (error) {
    throw error;
  }
}

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await CategoryService.create(name);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const getAll = async (req, res) => {
  try {
    const results = await CategoryService.getAll();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await CategoryService.getOne(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

// const deleteOneById = (req, res) => {
//   try {
//     const id = req.params.id;
//     console.log(id);
//     const cat = CategoryService.deleteOneById(id);
//     console.log(cat);
//     res.status(200).json("Ok");
//   } catch (error) {
//     throw error;
//   }
// }

module.exports = {
  create,
  getAll,
  updateOneById,
  getOne
}
