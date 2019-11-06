const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name : {
    type : String,
    required : true,
    trim : true,
  }
});

colorSchema.methods.toJSON = function () {
  const object = this;
  const objectJSON = object.toObject();
  delete objectJSON.__v;
  return objectJSON;
}

const ColorModel = mongoose.model('Colors', colorSchema);
module.exports = ColorModel;