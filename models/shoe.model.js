const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  name : {
    type : String,
    required : true,
    trim : true,
  },
  desc : {
    type : String,
    trim : true,
  },
  price : {
    type : Number,
    required : true,
  },
  category : { type : Schema.Types.ObjectId, ref : 'Categories'},
  size : [{type : Schema.Types.ObjectId, ref : 'Size'}],
  color : [{ type : Schema.Types.ObjectId, ref : 'Color'}],
}, {
  timestamps : true,
});

const ShoeModel = mongoose.model('Shoes', shoeSchema);
module.exports = ShoeModel;