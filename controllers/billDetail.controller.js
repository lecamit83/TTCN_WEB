const { BillDetailService } = require('../services');

const getAllByBillId = async (req, res) => {
  const { billID } = req.params.id;
  try {
    const result = await BillDetailService.getAllByBillId(billID);
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
  getAllByBillId,
}
