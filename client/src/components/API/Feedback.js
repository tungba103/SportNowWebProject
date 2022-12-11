const getAllFeedback = (result) => {
  fetch('/feedback')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getFeedbackByUsername = (result, username) => {
  fetch(`/feedback/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createFeedback = (username, content) => {
  fetch('/feedback/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, content: content }),
  }).then(() => {
    console.log('new Feedback added');
  });
};
const updateFeedbackByIdFeedback = (idFeedback, content) => {
  fetch('/feedback/update_by_id_feedback', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idFeedback: idFeedback, content: content }),
  }).then(() => {
    console.log('New Feedback updated');
  });
};
const deleteFeedbackByUsername = (username) => {
  fetch('/feedback/delete_by_username', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('delete Feedback');
  });
};
const deleteFeedbackByIdFeedback = (idFeedback) => {
  fetch('/feedback/delete_by_id_feedback', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idFeedback: idFeedback }),
  }).then(() => {
    console.log('delete Feedback');
  });
};

export { getAllFeedback, getFeedbackByUsername, createFeedback, updateFeedbackByIdFeedback, deleteFeedbackByUsername, deleteFeedbackByIdFeedback };
