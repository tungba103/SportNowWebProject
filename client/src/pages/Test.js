import React, { useEffect, useState } from 'react';
import { createAccount, updateAccountByUsername, deleteAccountByUsername, getAllAccount, getProductByIdProduct } from '../components/API';
function Test() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [accounts, setAccounts] = useState([{}]);
  const [onSubmit, setOnSubmit] = useState('');
  useEffect(() => {
    getAllAccount((data) => setAccounts(data));
  }, [onSubmit]);

  const [products, setProducts] = useState();
  useEffect(() => {
    getProductByIdProduct((data) => setProducts(data), 1);
  });
  return (
    <div className="mt-40">
      {typeof accounts === 'undefined' ? (
        <h1>Loading...</h1>
      ) : (
        accounts.map((ac, i) => {
          return <h1 key={i}>{ac.username}</h1>;
        })
      )}
      {typeof products === 'undefined' ? <h1>Loading...</h1> : <h1>{products[0].title}</h1>}
      <input type={'text'} onChange={(e) => setUsername(e.target.value)}></input>
      <input type={'text'} onChange={(e) => setPassword(e.target.value)}></input>
      <button
        onClick={() => {
          createAccount(username, password);
          setOnSubmit(username);
        }}
      >
        Submit
      </button>
      <button onClick={() => deleteAccountByUsername(username)}>Delete</button>
      <button onClick={() => updateAccountByUsername('tungbxxx', '123', 'Tung Bx', 'x', 'tungbxx@gmail.com', '123123123', 'DF', '2022/12/10')}>Update</button>
    </div>
  );
}

export default Test;
