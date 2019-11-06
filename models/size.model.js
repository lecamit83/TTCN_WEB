const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
  size : {
    type : Number,
    required : true,
  }
});

sizeSchema.methods.toJSON = function () {
  const object = this;
  const objectJSON = object.toObject();
  delete objectJSON.__v;
  return objectJSON;
}

const SizeModel = mongoose.model('Sizes', sizeSchema);
module.exports = SizeModel;