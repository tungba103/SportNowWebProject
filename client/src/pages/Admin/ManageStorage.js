import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { AddProduct, EditProduct } from '../../components';
function ManageStorage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [productInfo, setProductInfo] = useState({
    idProduct: 0,
    title: 'title',
    price: 0,
    image: 'image.png',
    description: 'description',
    storage: 0,
    sold: 0,
  });
  const products = [
    {
      idProduct: 1,
      title: 'Chelsea Home Shirt',
      price: 20,
      image: 'chelsea_shirt.png',
      description:
        "Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, they play their home games at Stamford Bridge. The club competes in the Premier League, the top division of English football. They won their first major honour, the League championship, in 1955. The club won the FA Cup for the first time in 1970, their first European honour, the Cup Winners' Cup, in 1971, and becoming only the third English club to win the Club World Cup in 2022",
      storage: 10,
      sold: 0,
    },
    {
      idProduct: 2,
      title: 'Chelsea Home Shorts',
      price: 15,
      image: 'chelsea_short.png',
      description:
        "Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, they play their home games at Stamford Bridge. The club competes in the Premier League, the top division of English football. They won their first major honour, the League championship, in 1955. The club won the FA Cup for the first time in 1970, their first European honour, the Cup Winners' Cup, in 1971, and becoming only the third English club to win the Club World Cup in 2022",
      storage: 10,
      sold: 0,
    },
  ];
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex">
        <p className="text-2xl font-bold p-1 ml-96">Manage Storage</p>
        <Button size={'sm'} className="ml-96" onClick={() => setShowAddProduct(true)}>
          Add new product
        </Button>
        <AddProduct show={showAddProduct} onClose={() => setShowAddProduct(false)} />
        <EditProduct product={productInfo} show={showEditProduct} onClose={() => setShowEditProduct(false)} />
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
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
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
                        setProductInfo(product);
                      }}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                    >
                      Edit Product
                    </p>
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
