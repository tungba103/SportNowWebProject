module.exports = (router) => {
  var FeedbackController = require('../controllers/feedbackController');
  router.get('/feedback', FeedbackController.getAllFeedback);
  router.get('/feedback/:username', FeedbackController.getFeedbackByUsername);
  router.delete('/feedback/delete_by_username', FeedbackController.deleteFeedbackByUsername);
  router.delete('/feedback/delete_by_id_feedback', FeedbackController.deleteFeedbackByIdFeedback);
  router.post('/feedback/create', FeedbackController.createFeedback);
  router.put('/feedback/update_by_id_feedback', FeedbackController.updateFeedbackByIdFeedback);
};
