module.exports = (router) => {
  var AddressController = require('../controllers/addressController');
  router.get('/api/address', AddressController.getAllAddress);
  router.get('/api/address/:username', AddressController.getAddressByUsername);
  router.delete('/api/address/delete_by_username', AddressController.deleteAddressByUsername);
  router.delete('/api/address/delete_by_id_address', AddressController.deleteAddressByIdAddress);
  router.post('/api/address/create', AddressController.createAddress);
  router.put('/api/address/update_by_id_address', AddressController.updateAddressByIdAddress);
};
