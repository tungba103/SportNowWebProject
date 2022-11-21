module.exports = (router) => {
  var AccountController = require('../controllers/accountController');
  router.get('/account', AccountController.getAllAccount);
  router.get('/account/detail/:username', AccountController.getAccountByUsername);
  router.delete('/account/delete/:username', AccountController.deleteAccount);
  router.post('/account/create', AccountController.createAccount);
  router.put('/account/update', AccountController.updateAccount);
};
