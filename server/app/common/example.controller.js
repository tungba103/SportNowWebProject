var Example = require('../common/example.model');

exports.getAllExample = (req, res) => {
  // req.params
  Example.getAll((data) => {
    res.send(data);
    // res.end();
  });
};
