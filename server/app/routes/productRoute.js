module.exports = (router) => {
  var ProductController = require('../controllers/productController');
  router.get('/api/product', ProductController.getAllProduct);

  router.get('/api/product/filter/:type', ProductController.getProductByType);
  router.get('/api/product/filter/:price_from/:price_to', ProductController.getProductByPriceRange);
  router.get('/api/product/filter/:type/:price_from/:price_to', ProductController.getProductByTypeAndPriceRange);
  router.get('/api/product/filter/sort/only_sort/:value/:order_type', ProductController.getProductSorted);
  router.get('/api/product/filter/sort/:type/:value/:order_type', ProductController.getProductSortedByType);
  router.get('/api/product/filter/sort/:price_from/:price_to/:value/:order_type', ProductController.getProductSortedByPriceRange);
  router.get('/api/product/filter/sort/:type/:price_from/:price_to/:value/:order_type', ProductController.getProductSortedByTypeAndPriceRange);

  router.get('/api/product/search/:search', ProductController.getProductSearch);
  router.get('/api/product/search/filter/:search/:type', ProductController.getProductSearchByType);
  router.get('/api/product/search/filter/:search/:price_from/:price_to', ProductController.getProductSearchByPriceRange);
  router.get('/api/product/search/filter/:search/:type/:price_from/:price_to', ProductController.getProductSearchByTypeAndPriceRange);
  router.get('/api/product/search/sort/:search/:value/:order_type', ProductController.getProductSearchSorted);
  router.get('/api/product/search/sort/:search/:type/:value/:order_type', ProductController.getProductSearchSortedByType);
  router.get('/api/product/search/sort/:search/:price_from/:price_to/:value/:order_type', ProductController.getProductSearchSortedByPriceRange);
  router.get('/api/product/search/sort/:search/:type/:price_from/:price_to/:value/:order_type', ProductController.getProductSearchSortedByTypeAndPriceRange);

  router.get('/api/product/:id_product', ProductController.getProductByIdProduct);
  router.delete('/api/product/delete_by_id_product', ProductController.deleteProductByIdProduct);
  router.post('/api/product/create', ProductController.createProduct);
  router.put('/api/product/update_info_by_id_product', ProductController.updateProductInfoByIdProduct);
  router.put('/api/product/update_storage_by_id_product', ProductController.updateProductStorageByIdProduct);
};
