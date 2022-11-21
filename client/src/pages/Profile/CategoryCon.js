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
    <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
      <p className="flex justify-center text-3xl font-bold mb-10">Category tag</p>
      <div className="flex flex-col sm:flex-row flex-wrap ">
        {cates.map((cate, i) => {
          return (
            <div className="flex justify-center sm:border sm:p-1 sm:m-2 rounded-sm">
              <Badge key={i} size="sm" className="w-28 text-lg ">
                {cate}
              </Badge>
              <Button size="xs" color="failure" className="ml-6" onClick={() => updateCategoryUser(cate)}>
                Remove
              </Button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 sm:mt-20">
        <input className="px-2 py-1 border focus:outline-none w-32 mr-10" onChange={(e) => setValue(e.target.value)} />
        <Button size="xs" onClick={() => updateCategoryUser()}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default CategoryCon;
