import { Table } from 'flowbite-react';
import { useState } from 'react';

function ManageFeedback() {
  const [feedbacks, setFeedbacks] = useState([
    {
      idFeedback: 6,
      username: 'tungba',
      content: 'Feedback from tungba',
    },
    {
      idFeedback: 7,
      username: 'tungba',
      content: 'The product is so good',
    },
  ]);
  return (
    <div className="flex flex-col items-center mt-4">
      <p className="text-2xl font-bold p-1">Manage Feedback</p>
      <Table className="mt-4">
        <Table.Head>
          <Table.HeadCell className="w-20 sm:w-96">ID Feedback</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Username</Table.HeadCell>
          <Table.HeadCell className="w-20 sm:w-96">Content</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {typeof feedbacks === 'undefined' ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">0</Table.Cell>
              <Table.Cell>username</Table.Cell>
              <Table.Cell>content</Table.Cell>
              <Table.Cell>
                <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ) : (
            feedbacks.map((feedback, i) => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">{feedback.idFeedback}</Table.Cell>
                  <Table.Cell>{feedback.username}</Table.Cell>
                  <Table.Cell>{feedback.content}</Table.Cell>
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
    </div>
  );
}

export default ManageFeedback;
