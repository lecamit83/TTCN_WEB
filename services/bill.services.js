const { BillDAO } = require('../models');

const createBill = async (user, address, money) => {
  try {
    const result = await BillDAO.create({ user, address, money });
    return result._id;
  } catch (error) {
    throw error;
  }
}

const getOne = async (billID) => {
  try {
    const result = await BillDAO.findBillByID(billID);
    return result;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const result = await BillDAO.findBill();
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createBill,
  getAll,
  getOne,
}
