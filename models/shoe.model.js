const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: { type: Schema.Types.ObjectId, ref: 'Categories' },
  size: [{ type: Schema.Types.ObjectId, ref: 'Sizes' }],
  color: [{ type: Schema.Types.ObjectId, ref: 'Colors' }],
}, {
  timestamps: true,
});

shoeSchema.statics.findShoe = function (query) {
  return this.find(query)
    .populate({ path: 'category' })
    .populate({ path: 'size' })
    .populate({ path: 'color' })
    .exec();
}

shoeSchema.statics.findShoeById = function (id) {
  return ShoeModel.findById(id)
    .populate({ path: 'category' })
    .populate({ path: 'size' })
    .populate({ path: 'color' })
    .exec();
}

const ShoeModel = mongoose.model('Shoes', shoeSchema);
module.exports = ShoeModel;