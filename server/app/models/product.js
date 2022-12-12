const db = require('../common/connection');

exports.getAllProduct = (result) => {
  db.query('SELECT * from product', (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};

// Filter
exports.getProductByType = (type, result) => {
  db.query(`SELECT * from product where type='${type}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductByPriceRange = (priceFrom, priceTo, result) => {
  db.query(`SELECT * from product WHERE price BETWEEN '${priceFrom}' AND '${priceTo}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductByTypeAndPriceRange = (type, priceFrom, priceTo, result) => {
  db.query(`SELECT * from product where type='${type}' AND price BETWEEN '${priceFrom}' AND '${priceTo}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSorted = (value, orderType, result) => {
  db.query(`SELECT * from product order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSortedByType = (type, value, orderType, result) => {
  db.query(`SELECT * from product where type='${type}' order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSortedByPriceRange = (priceFrom, priceTo, value, orderType, result) => {
  db.query(`SELECT * from product where price BETWEEN '${priceFrom}' AND '${priceTo}' order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSortedByTypeAndPriceRange = (type, priceFrom, priceTo, value, orderType, result) => {
  db.query(`SELECT * from product where type='${type}' AND price BETWEEN '${priceFrom}' AND '${priceTo}' order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};

// Search
exports.getProductSearch = (search, result) => {
  db.query(`SELECT * from product where title LIKE '${search}%'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSearchByType = (search, type, result) => {
  db.query(`SELECT * from product WHERE title LIKE '${search}%' AND type='${type}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSearchByPriceRange = (search, priceFrom, priceTo, result) => {
  db.query(`SELECT * from product WHERE title LIKE '${search}%' AND price BETWEEN '${priceFrom}' AND '${priceTo}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSearchByTypeAndPriceRange = (search, type, priceFrom, priceTo, result) => {
  db.query(`SELECT * from product where title LIKE '${search}%' AND type='${type}' AND price BETWEEN '${priceFrom}' AND '${priceTo}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSearchSorted = (search, value, orderType, result) => {
  db.query(`SELECT * from product where title LIKE '${search}%' order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSearchSortedByType = (search, type, value, orderType, result) => {
  db.query(`SELECT * from product where title LIKE '${search}%' AND type='${type}' order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSearchSortedByPriceRange = (search, priceFrom, priceTo, value, orderType, result) => {
  db.query(`SELECT * from product where title LIKE '${search}%' AND price BETWEEN '${priceFrom}' AND '${priceTo}' order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getProductSearchSortedByTypeAndPriceRange = (search, type, priceFrom, priceTo, value, orderType, result) => {
  db.query(`SELECT * from product where title LIKE '${search}%' AND type='${type}' AND price BETWEEN '${priceFrom}' AND '${priceTo}' order by ${value} ${orderType}`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};

// CRUD
exports.getProductByIdProduct = (idProduct, result) => {
  db.query(`SELECT * from product where idProduct = '${idProduct}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};

exports.deleteProductByIdProduct = (ac, result) => {
  db.query(`DELETE from product where idProduct = '${ac.idProduct}'`, (err, product) => {
    if (err) console.log('err: ' + err);
    else {
      result(product);
      return;
    }
  });
};

exports.createProduct = (ac, result) => {
  db.query(
    `INSERT INTO product (title,type,price,image,description,storage,sold) VALUES (?,?,?,?,?,?,?)`,
    [ac.title, ac.type, ac.price, ac.image, ac.description, ac.storage, ac.sold],
    (err, product) => {
      if (err) console.log('err: ' + err);
      else {
        result(product);
        return;
      }
    },
  );
};

exports.updateProductInfoByIdProduct = (ac, result) => {
  db.query('UPDATE product SET title=?,type=?, price=?,image=?,description=? where idProduct = ?', [ac.title, ac.type, ac.price, ac.image, ac.description, ac.idProduct], (err, product) => {
    if (err) console.log('err: ' + err);
    else {
      result(product);
      return;
    }
  });
};
exports.updateProductStorageByIdProduct = (ac, result) => {
  db.query('UPDATE product SET storage=?, sold=? where idProduct = ?', [ac.storage, ac.sold, ac.idProduct], (err, product) => {
    if (err) console.log('err: ' + err);
    else {
      result(product);
      return;
    }
  });
};
