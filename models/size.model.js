const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
  size : {
    type : Number,
    required : true,
  }
});

const SizeModel = mongoose.model('Sizes', sizeSchema);
module.exports = SizeModel;