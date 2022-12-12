import { Badge, Button } from 'flowbite-react';
import { useState } from 'react';
import { InputText } from '../../components';

function CategoryCon() {
  const categoryUsers = ['Javascript', 'NodeJs', 'HTML', 'CSS', 'Java'];
  const [value, setValue] = useState('');
  const [cates, setCates] = useState(categoryUsers);
  const updateCategoryUser = (cate) => {
    if (typeof cate === 'string') {
      const arr = [];
      cates.forEach((value) => {
        if (value != cate) arr.push(value);
      });
      setCates(arr);
    } else {
      const arr = [...cates];
      if (!arr.includes(value)) {
        arr.push(value);
      } else {
        alert('You already have this category tag, choose difference category tag');
      }
      setCates(arr);
    }
  };
  return (
    <div className="col-span-9 sm:col-span-10 pl-1 ">
      <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
        <h3 className="px-8 text-xl font-medium text-gray-900 dark:text-white">Category</h3>
        <div className="flex flex-col sm:flex-row flex-wrap mt-10 px-10">
          {cates.map((cate, i) => {
            return (
              <div className="flex justify-center items-center px-2 bg-orange-400 rounded-lg sm:p-2 sm:m-2 ">
                <p key={i} size="sm" className="w-24 text-lg">
                  {cate}
                </p>
                <Button size="xs" color="failure" className="" onClick={() => updateCategoryUser(cate)}>
                  Remove
                </Button>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4 sm:mt-20">
          <input className="px-2 py-1 border focus:outline-none w-32 mr-10" onChange={(e) => setValue(e.target.value)} />
          <Button size="sm" className="px-4" onClick={() => updateCategoryUser()}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCon;
