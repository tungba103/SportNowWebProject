module.exports = (router) => {
  var StorageHistoryController = require('../controllers/storageHistoryController');
  router.get('/storage_history', StorageHistoryController.getAllStorageHistory);
  router.get('/storage_history/:id_product', StorageHistoryController.getStorageHistoryByIdProduct);
  router.delete('/storage_history/delete', StorageHistoryController.deleteStorageHistoryByIdStorageHistory);
  router.post('/storage_history/create', StorageHistoryController.createStorageHistory);
  router.put('/storage_history/update', StorageHistoryController.updateStorageHistory);
};
