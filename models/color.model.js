const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name : {
    type : String,
    required : true,
    trim : true,
  }
});

const ColorModel = mongoose.model('Colors', colorSchema);
module.exports = ColorModel;