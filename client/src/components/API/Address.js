const getAllAddress = (result) => {
  fetch('/address')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getAddressByUsername = (result, username) => {
  fetch(`/address/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createAddress = (username, name, phone, province, district, subDistrict, detail) => {
  fetch('/address/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, name: name, phone: phone, province: province, district: district, subDistrict: subDistrict, detail: detail }),
  }).then(() => {
    console.log('new Address added');
  });
};

const updateAddressByIdAddress = (idAddress, username, name, phone, province, district, subDistrict, detail) => {
  fetch('/address/update_by_id_address', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idAddress: idAddress, username: username, name: name, phone: phone, province: province, district: district, subDistrict: subDistrict, detail: detail }),
  }).then(() => {
    console.log('New Address updated');
  });
};
const deleteAddressByIdAddress = (idAddress) => {
  fetch('/address/delete_by_id_address', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idAddress: idAddress }),
  }).then(() => {
    console.log('delete Address');
  });
};

export { getAllAddress, getAddressByUsername, createAddress, updateAddressByIdAddress, deleteAddressByIdAddress };
