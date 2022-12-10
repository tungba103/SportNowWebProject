var StorageHistory = require('../models/storageHistory');

exports.getAllStorageHistory = (req, res) => {
  StorageHistory.getAllStorageHistory((data) => {
    res.send(data);
  });
};
exports.getStorageHistoryByIdProduct = (req, res) => {
  StorageHistory.getStorageHistoryByIdProduct(req.params.id_product, (data) => {
    res.send(data);
  });
};
exports.deleteStorageHistoryByIdStorageHistory = (req, res) => {
  StorageHistory.deleteStorageHistoryByIdStorageHistory(req.body, (data) => {
    res.send(data);
  });
};
exports.createStorageHistory = (req, res) => {
  var ac = req.body;
  StorageHistory.createStorageHistory(ac, (data) => {
    res.send(data);
  });
};
exports.updateStorageHistoryByIdProduct = (req, res) => {
  var ac = req.body;
  StorageHistory.updateStorageHistoryByIdProduct(ac, (data) => {
    res.send(data);
  });
};
