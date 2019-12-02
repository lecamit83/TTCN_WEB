const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  }
});

categorySchema.methods.toJSON = function () {
  const object = this;
  const objectJSON = object.toObject();
  delete objectJSON.__v;
  return objectJSON;
}

const CategoryModel = mongoose.model('Categories', categorySchema);
module.exports = CategoryModel;
