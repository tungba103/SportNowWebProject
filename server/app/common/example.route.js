module.exports = (router) => {
  var ExampleController = require('../common/example.controller');

  router.get('./example', ExampleController.getAllExample);
  router.get('./example/detail/:id', ExampleController.getAllExample);
  router.post('./example/create', ExampleController.getAllExample);
  router.put('./example/update', ExampleController.getAllExample);
  router.delete('./example/delete', ExampleController.getAllExample);
};
