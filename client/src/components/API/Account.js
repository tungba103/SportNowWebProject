const getAllAccount = (result) => {
  fetch('/account')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getAccountByUsername = (result, username) => {
  fetch(`/account/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createAccount = (username, password) => {
  fetch('/account/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password }),
  }).then(() => {
    console.log('new account added');
  });
};
const updateAccountByUsername = (username, password, name, image, email, phoneNumber, gender, dob) => {
  fetch('/account/update_by_username', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password, name: name, image: image, email: email, phoneNumber: phoneNumber, gender: gender, dob: dob }),
  }).then(() => {
    console.log('New account updated');
  });
};
const deleteAccountByUsername = (username) => {
  fetch('/account/delete_by_username', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('delete Account');
  });
};

// Category User
const getAllCategoryUser = (result) => {
  fetch('/category_user')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getCategoryUserByUsername = (result, username) => {
  fetch(`/category_user/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createCategoryUserItem = (username, cuName) => {
  fetch('/category_user/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, cuName: cuName }),
  }).then(() => {
    console.log('new CategoryUser Item added');
  });
};

const deleteCategoryUserByUsername = (username) => {
  fetch('/category_user/delete_by_username', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('delete Category User');
  });
};
const deleteCategoryUserItemByUsernameAndCuName = (username, cuName) => {
  fetch('/category_user/delete_by_username_and_cu_name', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, cuName: cuName }),
  }).then(() => {
    console.log('delete Category User Item');
  });
};

// Cart
const getAllCart = (result) => {
  fetch('/cart')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getCartByUsername = (result, username) => {
  fetch(`/cart/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createCart = (username, idProduct, quantity) => {
  fetch('/cart/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, idProduct: idProduct, quantity: quantity }),
  }).then(() => {
    console.log('new Cart added');
  });
};
const updateQuantityByUsernameAndIdProduct = (username, idProduct, quantity) => {
  fetch('/cart/update_by_username_and_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, idProduct: idProduct, quantity: quantity }),
  }).then(() => {
    console.log('New Cart updated');
  });
};
const deleteCartByUsername = (username) => {
  fetch('/cart/delete_by_username', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('delete Cart By Username');
  });
};
const deleteCartItemByUsernameAndIdProduct = (username, idProduct) => {
  fetch('/cart/delete_by_username_and_id_product', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, idProduct: idProduct }),
  }).then(() => {
    console.log('delete Cart Item By Username And IdProduct');
  });
};

export { getAllAccount, getAccountByUsername, createAccount, updateAccountByUsername, deleteAccountByUsername };
export { getAllCategoryUser, getCategoryUserByUsername, createCategoryUserItem, deleteCategoryUserByUsername, deleteCategoryUserItemByUsernameAndCuName };
export { getAllCart, getCartByUsername, createCart, updateQuantityByUsernameAndIdProduct, deleteCartByUsername, deleteCartItemByUsernameAndIdProduct };
