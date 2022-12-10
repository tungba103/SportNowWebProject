module.exports = (router) => {
  var StorageHistoryController = require('../controllers/storageHistoryController');
  router.get('/storage_history', StorageHistoryController.getAllStorageHistory);
  router.get('/storage_history/:id_product', StorageHistoryController.getStorageHistoryByIdProduct);
  router.delete('/storage_history/delete_by_id_storage_history', StorageHistoryController.deleteStorageHistoryByIdStorageHistory);
  router.post('/storage_history/create', StorageHistoryController.createStorageHistory);
  router.put('/storage_history/update_by_id_product', StorageHistoryController.updateStorageHistoryByIdProduct);
};
