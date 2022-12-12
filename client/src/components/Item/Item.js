import { Link } from 'react-router-dom';
import { createCart } from '../API/Account';
function Item({ idProduct, title, price, image }) {
  // ${props.image}
  return (
    <div className="cursor-pointer item flex flex-col justify-between mb-4 w-fit  rounded-2xl border border-sky-800 bg-white p-4 hover:bg-gray-100">
      <Link to={`/detail/${idProduct}`}>
        <img
          className="w-32 sm:w-96 sm:pb-2 h-60 "
          src={typeof image === 'undefined' ? 'https://i.pinimg.com/originals/81/df/10/81df1017af6b81e3d733e969e4410152.jpg' : require(`../../assets/image/${image}`)}
          alt="image"
        />
      </Link>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="py-1 text-sm sm:text-base font-bold">{title}</p>
          <p className="py-1 text-sm sm:text-base">${price}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              createCart(sessionStorage.getItem('username'), idProduct, 1);
            }}
            className="mt-2 rounded-3xl border border-sky-800 py-2 px-4 w-36 sm:py-3 bg-orange-100 hover:bg-orange-400"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
