const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billDetailSchema = Schema({
  bill: { type: Schema.Types.ObjectId, ref: 'Bills' },
  shoe: { type: Schema.Types.ObjectId, ref: 'Shoes' },
  amount: { type: Number, required: true },
}, {
  timestamps: true,
});

billDetailSchema.statics.findBillDetails = () => {
  return BillDetailModel.find()
    .populate({ path: 'bill' })
    .populate({ path: 'shoe' })
    .exec();
}

billDetailSchema.statics.findBillDetailsById = (id) => {
  return BillDetailModel.findById({ id })
    .populate({ path: 'bill' })
    .populate({ path: 'shoe' })
    .exec();
}

billDetailSchema.statics.findBillDetailsByBillId = (billID) => {
  return BillDetailModel.find({ bill: billID })
    .populate({ path: 'bill' })
    .populate({ path: 'shoe' })
    .exec();
}

billDetailSchema.statics.totalMoneyByBillId = (billID) => {
  const billDetails = findBillDetailsByBillId(billID);
  let total = 0;
  if (billDetails.length > 0) {
    billDetails.forEach(i => {
      total += i.amount * i.shoe.price;
    });
  }
  return total;
}

const BillDetailModel = mongoose.model('BillDetails', billDetailSchema);
module.exports = BillDetailModel;
