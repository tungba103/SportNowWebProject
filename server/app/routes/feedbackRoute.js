module.exports = (router) => {
  var FeedbackController = require('../controllers/feedbackController');
  router.get('/api/feedback', FeedbackController.getAllFeedback);
  router.get('/api/feedback/:username', FeedbackController.getFeedbackByUsername);
  router.delete('/api/feedback/delete_by_username', FeedbackController.deleteFeedbackByUsername);
  router.delete('/api/feedback/delete_by_id_feedback', FeedbackController.deleteFeedbackByIdFeedback);
  router.post('/api/feedback/create', FeedbackController.createFeedback);
  router.put('/api/feedback/update_by_id_feedback', FeedbackController.updateFeedbackByIdFeedback);
};
