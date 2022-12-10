const getAllStorageHistory = (result) => {
  fetch('/storage_history')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getStorageHistoryByIdProduct = (result, idProduct) => {
  fetch(`/storage_history/${idProduct}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createStorageHistory = (idProduct, action, storage) => {
  fetch('/storage_history/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct, action: action, storage: storage }),
  }).then(() => {
    console.log('new StorageHistory added');
  });
};
const updateStorageHistoryByUsername = (idProduct, action, storage) => {
  fetch('/storage_history/update_by_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idProduct: idProduct, action: action, storage: storage }),
  }).then(() => {
    console.log('New StorageHistory updated');
  });
};
const deleteStorageHistoryByIdStorageHistory = (idStorageHistory) => {
  fetch('/storage_history/delete_by_id_storage_history', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idStorageHistory: idStorageHistory }),
  }).then(() => {
    console.log('delete StorageHistory');
  });
};

export { getAllStorageHistory, getStorageHistoryByIdProduct, createStorageHistory, updateStorageHistoryByUsername, deleteStorageHistoryByIdStorageHistory };
