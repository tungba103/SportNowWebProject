module.exports = (router) => {
  var AddressController = require('../controllers/addressController');
  router.get('/address', AddressController.getAllAddress);
  router.get('/address/:username', AddressController.getAddressByUsername);
  router.delete('/address/delete_by_username', AddressController.deleteAddressByUsername);
  router.delete('/address/delete_by_id_address', AddressController.deleteAddressByIdAddress);
  router.post('/address/create', AddressController.createAddress);
  router.put('/address/update_by_id_address', AddressController.updateAddressByIdAddress);
};
