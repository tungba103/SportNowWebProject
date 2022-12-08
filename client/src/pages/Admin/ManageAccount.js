import { Button, Table } from 'flowbite-react';

function ManageAccount() {
  const users = [
    {
      username: 'tungba1',
      password: '123',
      name: 'TungBo',
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      email: 'tungba100302@gmail.com',
      phoneNumber: '0965899821',
      gender: 'Male',
      dob: '2022-12-02T17:00:00.000Z',
    },
    {
      username: 'tungba2',
      password: '123',
      name: 'TungBo',
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      email: 'tungba100302@gmail.com',
      phoneNumber: '0965899821',
      gender: 'Male',
      dob: '2022-12-02T17:00:00.000Z',
    },
  ];
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
                    <Button size={'xs'} color="failure">
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
