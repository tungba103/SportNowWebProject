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
    <div className="items-center mt-4">
      <div className="flex justify-center">
        <p className="text-2xl font-bold p-1">Manage Revenue</p>
      </div>
      <Table className="mt-4">
        <Table.Head>
          <Table.HeadCell className="w-20 sm:w-96">ID Order</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Username</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Order Date</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Cost</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {typeof orders === 'undefined' ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">ID Order</Table.Cell>
              <Table.Cell>Username</Table.Cell>
              <Table.Cell>Order Date</Table.Cell>
              <Table.Cell>Cost</Table.Cell>
            </Table.Row>
          ) : (
            orders.map((order, i) => {
              cost += order.total;
              return (
                <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{order.idOrder}</Table.Cell>
                  <Table.Cell>{order.username}</Table.Cell>
                  <Table.Cell>{order.orderDate}</Table.Cell>
                  <Table.Cell>${order.total}</Table.Cell>
                </Table.Row>
              );
            })
          )}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Total</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell className="font-bold">${cost}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageRevenue;
