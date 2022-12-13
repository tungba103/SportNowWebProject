var Address = require('../models/address');

exports.getAllAddress = (req, res) => {
  Address.getAllAddress((data) => {
    res.send(data);
  });
};
exports.getAddressByUsername = (req, res) => {
  Address.getAddressByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.getAddressByIdAddress = (req, res) => {
  Address.getAddressByIdAddress(req.params.id_address, (data) => {
    res.send(data);
  });
};
exports.deleteAddressByUsername = (req, res) => {
  var ac = req.body;
  Address.deleteAddressByUsername(ac, (data) => {
    res.send(data);
  });
};
exports.deleteAddressByIdAddress = (req, res) => {
  var ac = req.body;
  Address.deleteAddressByIdAddress(ac, (data) => {
    res.send(data);
  });
};
exports.createAddress = (req, res) => {
  var ac = req.body;
  Address.createAddress(ac, (data) => {
    res.send(data);
  });
};
exports.updateAddressByIdAddress = (req, res) => {
  var ac = req.body;
  Address.updateAddressByIdAddress(ac, (data) => {
    res.send(data);
  });
};
