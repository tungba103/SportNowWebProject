import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getAllAccount, deleteAccountByUsername } from '../../components/API';
function ManageAccount() {
  const [users, setUsers] = useState([{}]);
  const [onRemove, setOnRemove] = useState('');

  useEffect(() => {
    getAllAccount((data) => setUsers(data));
  }, [onRemove]);

  const deleteAccount = (username) => {
    setOnRemove(username);
    deleteAccountByUsername(username);
  };
  return (
    <div className="flex flex-col items-center mt-4 ">
      <p className="text-2xl font-bold p-1">Manage Account</p>
      <Table className="">
        <Table.Head>
          <Table.HeadCell className="w-20 sm:w-96">Username</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Name</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Email</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Phone Number</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {typeof users === 'undefined' ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Username</Table.Cell>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Email</Table.Cell>
              <Table.Cell>Phone Number</Table.Cell>

              <Table.Cell>
                <Button size={'xs'} color="failure">
                  Remove
                </Button>
              </Table.Cell>
            </Table.Row>
          ) : (
            users.map((user, i) => {
              return (
                <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{user.username}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.phoneNumber}</Table.Cell>

                  <Table.Cell>
                    <Button onClick={() => deleteAccount(user.username)} size={'xs'} color="failure">
                      Remove
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

export default ManageAccount;
