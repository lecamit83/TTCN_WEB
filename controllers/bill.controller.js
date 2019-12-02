const { BillService, BillDetailService } = require('../services');

const createBill = async (req, res) => {
  const { user, address, money, listOfShoes } = req.body;
  try {
    const billID = await BillService.createBill(user, address, money);
    const result = await BillDetailService.creatBillDetail(listOfShoes, billID);
    if (billID != undefined && result != undefined) {
      res.status(200).json(result);
      return;
    }
    res.sendStatus(404);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getAll = async (req, res) => {
  try {
    const result = await BillService.getAll();
    if (result != undefined) {
      res.status(200).json(result);
      return;
    }
    res.sendStatus(404);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getOne = async (req, res) => {
  const { billId } = req.params.id;
  try {
    const result = await BillService.getOne(billId);
    if (result != undefined) {
      res.status(200).json(result);
      return;
    }
    res.sendStatus(404);
  } catch (error) {
    res.status(404).json(error);
  }
}

module.exports = {
  createBill,
  getOne,
  getAll,
}
