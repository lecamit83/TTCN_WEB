const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  address: { type: String, required: true },
  money: { type: Number }
}, {
  timestamps: true,
});


billSchema.statics.findBill = ({ query }) => {
  return BillModel.find(query)
    .populate({ path: 'user' })
    .exec();
}

billSchema.statics.findBillByID = (id) => {
  return BillModel.findById({ id })
    .populate({ path: 'user' })
    .exec();
}

const BillModel = mongoose.model("Bills", billSchema);
module.exports = BillModel;
