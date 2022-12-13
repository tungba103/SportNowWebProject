const getAllProduct = (result) => {
  fetch('/api/product')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductByIdProduct = (result, idProduct) => {
  fetch(`/api/product/${idProduct}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};

// Filter
const getProductByType = (result, type) => {
  fetch(`/api/product/filter/${type}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductByPriceRange = (result, priceFrom, priceTo) => {
  fetch(`/api/product/filter/${priceFrom}/${priceTo}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductByTypeAndPriceRange = (result, type, priceFrom, priceTo) => {
  fetch(`/api/product/filter/${type}/${priceFrom}/${priceTo}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSorted = (result, value, orderType) => {
  fetch(`/api/product/filter/sort/only_sort/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSortedByType = (result, type, value, orderType) => {
  fetch(`/api/product/filter/sort/${type}/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSortedByPriceRange = (result, priceFrom, priceTo, value, orderType) => {
  fetch(`/api/product/filter/sort/${priceFrom}/${priceTo}/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSortedByTypeAndPriceRange = (result, type, priceFrom, priceTo, value, orderType) => {
  fetch(`/api/product/filter/sort/${type}/${priceFrom}/${priceTo}/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};

// Search
const getProductSearch = (result, search) => {
  fetch(`/api/product/search/${search}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSearchByType = (result, search, type) => {
  fetch(`/api/product/search/filter/${search}/${type}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSearchByPriceRange = (result, search, priceFrom, priceTo) => {
  fetch(`/api/product/search/filter/${search}/${priceFrom}/${priceTo}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSearchByTypeAndPriceRange = (result, search, type, priceFrom, priceTo) => {
  fetch(`/api/product/search/filter/${search}/${type}/${priceFrom}/${priceTo}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSearchSorted = (result, search, value, orderType) => {
  fetch(`/api/product/search/sort/${search}/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSearchSortedByType = (result, search, type, value, orderType) => {
  fetch(`/api/product/search/sort/${search}/${type}/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSearchSortedByPriceRange = (result, search, priceFrom, priceTo, value, orderType) => {
  fetch(`/api/product/search/sort/${search}/${priceFrom}/${priceTo}/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getProductSearchSortedByTypeAndPriceRange = (result, search, type, priceFrom, priceTo, value, orderType) => {
  fetch(`/api/product/search/sort/${search}/${type}/${priceFrom}/${priceTo}/${value}/${orderType}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};

const createProduct = (title, price, image, description, storage, sold) => {
  fetch('/api/product/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title, price: price, image: image, description: description, storage: storage, sold: sold }),
  }).then(() => {
    console.log('new Product added');
  });
};
const updateProductInfoByIdProduct = (idProduct, title, price, image, description) => {
  fetch('/api/product/update_info_by_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct, title: title, price: price, image: image, description: description }),
  }).then(() => {
    console.log('New Product updated');
  });
};
const updateProductStorageByIdProduct = (idProduct, storage, sold) => {
  fetch('/api/product/update_storage_by_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct, storage: storage, sold: sold }),
  }).then(() => {
    console.log('New Product updated');
  });
};
const deleteProductByIdProduct = (idProduct) => {
  fetch('/api/product/delete_by_id_product', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct }),
  }).then(() => {
    console.log('delete Product');
  });
};

export {
  getAllProduct,
  getProductByType,
  getProductByPriceRange,
  getProductByTypeAndPriceRange,
  getProductSorted,
  getProductSortedByPriceRange,
  getProductSortedByType,
  getProductSortedByTypeAndPriceRange,
  getProductByIdProduct,
  getProductSearch,
  getProductSearchByType,
  getProductSearchByPriceRange,
  getProductSearchByTypeAndPriceRange,
  getProductSearchSorted,
  getProductSearchSortedByPriceRange,
  getProductSearchSortedByType,
  getProductSearchSortedByTypeAndPriceRange,
  createProduct,
  updateProductInfoByIdProduct,
  updateProductStorageByIdProduct,
  deleteProductByIdProduct,
};
