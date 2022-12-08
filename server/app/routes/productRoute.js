module.exports = (router) => {
  var ProductController = require('../controllers/productController');
  router.get('/product', ProductController.getAllProduct);
  router.get('/product/:id_product', ProductController.getProductByIdProduct);
  router.delete('/product/delete', ProductController.deleteProductByIdProduct);
  router.post('/product/create', ProductController.createProduct);
  router.put('/product/update_info', ProductController.updateProductInfo);
  router.put('/product/update_storage', ProductController.updateProductStorage);

  router.get('/category_product', ProductController.getAllCategoryProduct);
  router.get('/category_product/:id_product', ProductController.getCategoryProductByIdProduct);
  router.delete('/category_product/delete_by_c_name', ProductController.deleteCategoryProductByCName);
  router.delete('/category_product/delete_by_id_product', ProductController.deleteCategoryProductByIdProduct);
  router.post('/category_product/create', ProductController.createCategoryProduct);
};
