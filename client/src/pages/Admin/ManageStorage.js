import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { AddProduct, EditProduct } from '../../components';

import { deleteProductByIdProduct, getAllProduct, getProductByIdProduct } from '../../components/API/Product';
function ManageStorage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);

  const [products, setProducts] = useState();
  const [hook, setHook] = useState(0);
  // const [productInfo, setProductInfo] = useState({
  //   idProduct: 0,
  //   title: 'title',
  //   price: 0,
  //   image: 'image.png',
  //   description: 'description',
  //   storage: 0,
  //   sold: 0,
  // });

  // const fetchProductInfo = (idProduct) => {
  //   getProductByIdProduct((data) => setProductInfo(data));
  // };
  const [idProduct, setIdProduct] = useState(1);

  useEffect(() => {
    getAllProduct((data) => setProducts(data));
  }, [hook]);

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex">
        <p className="text-2xl font-bold p-1 ml-96">Manage Storage</p>
        <Button size={'sm'} className="ml-96" onClick={() => setShowAddProduct(true)}>
          Add new product
        </Button>
        <AddProduct hook={() => setHook(Math.random())} show={showAddProduct} onClose={() => setShowAddProduct(false)} />
        <EditProduct idProduct={idProduct} hook={() => setHook(Math.random())} show={showEditProduct} onClose={() => setShowEditProduct(false)} />
      </div>
      <Table className="mt-4">
        <Table.Head>
          <Table.HeadCell className="w-20 sm:w-96">idProduct</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Title</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Price</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Image</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Description</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Storage</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Sold</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {typeof products === 'undefined' ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">idProduct</Table.Cell>
              <Table.Cell>Title</Table.Cell>
              <Table.Cell>Price</Table.Cell>
              <Table.Cell>Image</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>Storage</Table.Cell>
              <Table.Cell>Sold</Table.Cell>
              <Table.Cell>
                <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Edit
                </a>
              </Table.Cell>
              <Table.Cell>
                <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Edit
                </a>
              </Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          ) : (
            products.map((product, i) => {
              return (
                <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{product.idProduct}</Table.Cell>
                  <Table.Cell>{product.title}</Table.Cell>
                  <Table.Cell>{product.price}</Table.Cell>
                  <Table.Cell>{product.image}</Table.Cell>
                  <Table.Cell>{product.description.slice(0, 54)}...</Table.Cell>
                  <Table.Cell>{product.storage}</Table.Cell>
                  <Table.Cell>{product.sold}</Table.Cell>

                  <Table.Cell>
                    <p
                      onClick={() => {
                        setShowEditProduct(true);
                        setIdProduct(product.idProduct);
                        // setProductInfo(product);
                      }}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                    >
                      Edit Product
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        deleteProductByIdProduct(product.idProduct);
                        setHook(Math.random());
                      }}
                      color={'failure'}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageStorage;
