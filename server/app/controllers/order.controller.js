var Account = require('../models/account.model');

exports.getAllAccount = (req, res) => {
  Account.getAll((data) => {
    res.send(data);
  });
};
exports.getAccountByUsername = (req, res) => {
  Account.getByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteAccount = (req, res) => {
  Account.delete(req.params.username, (data) => {
    res.send(data);
  });
};
exports.createAccount = (req, res) => {
  var ac = req.body;
  Account.create(ac, (data) => {
    res.send(data);
  });
};
exports.updateAccount = (req, res) => {
  var ac = req.body;
  Account.update(ac, (data) => {
    res.send(data);
  });
};
