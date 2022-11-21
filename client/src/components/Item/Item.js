import { Link } from 'react-router-dom';
function Item(props) {
  return (
    <div className=" item flex flex-col justify-between mb-4 w-fit  rounded-2xl border border-sky-800 bg-white p-4 hover:bg-gray-100">
      <Link to={`/${props.image}`}>
        <img className="w-32 sm:w-96 sm:pb-2 " src={require(`../../assets/image/${props.image}`)} alt="image" />
      </Link>
      <div className="flex flex-col items-center">
        <Link to={`${props.image}`} className="flex flex-col items-center">
          <p className="py-1 text-sm sm:text-base font-bold">{props.name}</p>
          <p className="py-1 text-sm sm:text-base">${props.price}</p>
        </Link>
        <div className="flex justify-center">
          <button onClick={() => props.addToCartFromHome()} className="mt-2 rounded-3xl border border-sky-800 py-2 px-4 w-36 sm:py-3 bg-white hover:bg-orange-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
