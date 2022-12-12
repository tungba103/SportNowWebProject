import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getAllOrder } from '../../components/API/Order';
function ManageRevenue() {
  var cost = 0;
  const [orders, setOrders] = useState([
    {
      idOrder: 0,
      username: 'username',
      orderDate: 'orderDate',
      status: 'status',
    },
  ]);

  useEffect(() => {
    getAllOrder((data) => setOrders(data));
  }, []);

  return (
    <div className="flex flex-col items-center mt-4">
      <p className="text-2xl font-bold p-1">Manage Revenue</p>
      <Table className="mt-4">
        <Table.Head>
          <Table.HeadCell className="w-20 sm:w-96">ID Order</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Username</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Order Date</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {typeof orders === 'undefined' ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">ID Order</Table.Cell>
              <Table.Cell>Username</Table.Cell>
              <Table.Cell>Order Date</Table.Cell>
              <Table.Cell>Cost</Table.Cell>
              <Table.Cell>
                <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ) : (
            orders.map((order, i) => {
              cost += 1000;
              return (
                <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{order.idOrder}</Table.Cell>
                  <Table.Cell>{order.username}</Table.Cell>
                  <Table.Cell>{order.orderDate}</Table.Cell>
                  <Table.Cell>$1000</Table.Cell>
                  <Table.Cell>
                    <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              );
            })
          )}
        </Table.Body>
      </Table>
      <div>{cost}</div>
    </div>
  );
}

export default ManageRevenue;
