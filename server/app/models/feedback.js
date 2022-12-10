const db = require('../common/connection');

exports.getAllFeedback = (result) => {
  db.query('SELECT * from feedback', (err, feedback) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(feedback);
      return;
    }
  });
};

exports.getFeedbackByUsername = (username, result) => {
  db.query(`SELECT * from feedback where username = '${username}'`, (err, feedback) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(feedback);
      return;
    }
  });
};

exports.deleteFeedbackByUsername = (ac, result) => {
  db.query(`DELETE from feedback where username = ?`, [ac.username], (err, feedback) => {
    if (err) console.log('err: ' + err);
    else {
      result(feedback);
      return;
    }
  });
};
exports.deleteFeedbackByIdFeedback = (ac, result) => {
  db.query(`DELETE from feedback where idFeedback = ?`, [ac.idFeedback], (err, feedback) => {
    if (err) console.log('err: ' + err);
    else {
      result(feedback);
      return;
    }
  });
};

exports.createFeedback = (ac, result) => {
  db.query(`INSERT INTO feedback (username, content) VALUES (?,?)`, [ac.username, ac.content], (err, feedback) => {
    if (err) console.log('err: ' + err);
    else {
      result(feedback);
      return;
    }
  });
};

exports.updateFeedbackByIdFeedback = (ac, result) => {
  db.query('UPDATE feedback SET content = ? where idFeedback=?', [ac.content, ac.idFeedback], (err, feedback) => {
    if (err) console.log('err: ' + err);
    else {
      result(feedback);
      return;
    }
  });
};
