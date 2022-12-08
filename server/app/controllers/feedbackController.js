var Feedback = require('../models/feedback');

exports.getAllFeedback = (req, res) => {
  Feedback.getAllFeedback((data) => {
    res.send(data);
  });
};
exports.getFeedbackByUsername = (req, res) => {
  Feedback.getFeedbackByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteFeedbackByUsername = (req, res) => {
  var ac = req.body;
  Feedback.deleteFeedbackByUsername(ac, (data) => {
    res.send(data);
  });
};
exports.createFeedback = (req, res) => {
  var ac = req.body;
  Feedback.createFeedback(ac, (data) => {
    res.send(data);
  });
};
exports.updateFeedback = (req, res) => {
  var ac = req.body;
  Feedback.updateFeedback(ac, (data) => {
    res.send(data);
  });
};
