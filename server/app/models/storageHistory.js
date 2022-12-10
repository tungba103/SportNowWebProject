const db = require('../common/connection');

exports.getAllStorageHistory = (result) => {
  db.query('SELECT * from storage_history', (err, storageHistory) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(storageHistory);
      return;
    }
  });
};

exports.getStorageHistoryByIdProduct = (idProduct, result) => {
  db.query(`SELECT * from storage_history where idProduct = '${idProduct}'`, (err, storageHistory) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(storageHistory);
      return;
    }
  });
};

exports.deleteStorageHistoryByIdStorageHistory = (ac, result) => {
  db.query(`DELETE from storage_history where idStorageHistory = '${ac.idStorageHistory}'`, (err, storageHistory) => {
    if (err) console.log('err: ' + err);
    else {
      result(storageHistory);
      return;
    }
  });
};

exports.createStorageHistory = (ac, result) => {
  db.query(`INSERT INTO storage_history (idProduct,action,storage) VALUES (?,?,?)`, [ac.idProduct, ac.action, ac.storage], (err, storageHistory) => {
    if (err) console.log('err: ' + err);
    else {
      result(storageHistory);
      return;
    }
  });
};

exports.updateStorageHistoryByIdProduct = (ac, result) => {
  db.query('UPDATE storage_history SET action=?, storage=? where idProduct = ?', [ac.action, ac.storage, ac.idProduct], (err, storageHistory) => {
    if (err) console.log('err: ' + err);
    else {
      result(storageHistory);
      return;
    }
  });
};
