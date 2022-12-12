const getAllAccount = (result) => {
  fetch('/api/account')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getAccountByUsername = (result, username) => {
  fetch(`/api/account/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createAccount = (username, password) => {
  fetch('/api/account/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password }),
  }).then(() => {
    console.log('new account added');
  });
};
const updateAccountByUsername = (username, password, name, image, email, phoneNumber, gender, dob) => {
  fetch('/api/account/update_by_username', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password, name: name, image: image, email: email, phoneNumber: phoneNumber, gender: gender, dob: dob }),
  }).then(() => {
    console.log('New account updated');
  });
};
const deleteAccountByUsername = (username) => {
  fetch('/api/account/delete_by_username', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('delete Account');
  });
};

// Category User
const getAllCategoryUser = (result) => {
  fetch('/api/category_user')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getCategoryUserByUsername = (result, username) => {
  fetch(`/api/category_user/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createCategoryUserItem = (username, cuName) => {
  fetch('/api/category_user/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, cuName: cuName }),
  }).then(() => {
    console.log('new CategoryUser Item added');
  });
};

const deleteCategoryUserByUsername = (username) => {
  fetch('/api/category_user/delete_by_username', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('delete Category User');
  });
};
const deleteCategoryUserItemByUsernameAndCuName = (username, cuName) => {
  fetch('/api/category_user/delete_by_username_and_cu_name', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, cuName: cuName }),
  }).then(() => {
    console.log('delete Category User Item');
  });
};

// Cart
const getAllCart = (result) => {
  fetch('/api/cart')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getCartByUsername = (result, username) => {
  fetch(`/api/cart/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createCart = (username, idProduct, quantity) => {
  fetch('/api/cart/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, idProduct: idProduct, quantity: quantity }),
  }).then(() => {
    console.log('new Cart added');
  });
};
const updateQuantityByUsernameAndIdProduct = (username, idProduct, quantity) => {
  fetch('/api/cart/update_by_username_and_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, idProduct: idProduct, quantity: quantity }),
  }).then(() => {
    console.log('New Cart updated');
  });
};
const deleteCartByUsername = (username) => {
  fetch('/api/cart/delete_by_username', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('delete Cart By Username');
  });
};
const deleteCartItemByUsernameAndIdProduct = (username, idProduct) => {
  fetch('/api/cart/delete_by_username_and_id_product', {
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
