module.exports = (router) => {
  var FeedbackController = require('../controllers/feedbackController');
  router.get('/feedback', FeedbackController.getAllFeedback);
  router.get('/feedback/:username', FeedbackController.getFeedbackByUsername);
  router.delete('/feedback/delete', FeedbackController.deleteFeedbackByUsername);
  router.post('/feedback/create', FeedbackController.createFeedback);
  router.put('/feedback/update', FeedbackController.updateFeedback);
};
