const { BillDetailDAO } = require('../models');

const creatBillDetail = async (listOfShoes, billID) => {
  try {
    let result = {};
    listOfShoes.forEach(i => {
      result += BillDetailDAO.create({ bill: billID, shoe: i._id, amount: i.amount });
    });
    return result;
  } catch (error) {
    throw error;
  }
}

const getAllByBillId = async (billID) => {
  try {
    const result = await BillDetailDAO.findBillDetailsByBillId(billID);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  creatBillDetail,
  getAllByBillId,
}
