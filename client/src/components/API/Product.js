const getAllProduct = (result) => {
  fetch('/product')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductByIdProduct = (result, idProduct) => {
  fetch(`/product/${idProduct}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createProduct = (title, price, image, description, storage, sold) => {
  fetch('/product/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title, price: price, image: image, description: description, storage: storage, sold: sold }),
  }).then(() => {
    console.log('new Product added');
  });
};
const updateProductInfoByIdProduct = (idProduct, title, price, image, description) => {
  fetch('/product/update_info_by_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct, title: title, price: price, image: image, description: description }),
  }).then(() => {
    console.log('New Product updated');
  });
};
const updateProductStorageByIdProduct = (idProduct, storage, sold) => {
  fetch('/product/update_storage_by_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct, storage: storage, sold: sold }),
  }).then(() => {
    console.log('New Product updated');
  });
};
const deleteProductByIdProduct = (idProduct) => {
  fetch('/product/delete_by_id_product', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct }),
  }).then(() => {
    console.log('delete Product');
  });
};

// Category Product
const getAllCategoryProduct = (result) => {
  fetch('/category_product')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getCategoryProductByIdProduct = (result, idProduct) => {
  fetch(`/category_product/${idProduct}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createCategoryProduct = (idProduct, cName) => {
  fetch('/category_product/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct, cName: cName }),
  }).then(() => {
    console.log('new CategoryProduct added');
  });
};

const deleteCategoryProductByCName = (cName) => {
  fetch('/category_product/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cName: cName }),
  }).then(() => {
    console.log('delete CategoryProduct By CName');
  });
};
const deleteCategoryProductByIdProduct = (idProduct) => {
  fetch('/category_product/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct }),
  }).then(() => {
    console.log('delete CategoryProduct by Id Product');
  });
};

export { getAllProduct, getProductByIdProduct, createProduct, updateProductInfoByIdProduct, updateProductStorageByIdProduct, deleteProductByIdProduct };
export { getAllCategoryProduct, getCategoryProductByIdProduct, createCategoryProduct, deleteCategoryProductByCName, deleteCategoryProductByIdProduct };
