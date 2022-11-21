import { faChevronCircleDown, faChevronRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from '../../components/Item/Item';
function ItemDetailPage(props) {
  // Get item API
  const items = [
    {
      name: 'Arsenal Shirt',
      image: 'arsenal_shirt.png',
      price: 100,
    },
    {
      name: 'Arsenal Ball',
      image: 'arsenal_ball.png',
      price: 200,
    },
    {
      name: 'Arsenal Socks',
      image: 'arsenal_socks.png',
      price: 200,
    },
    {
      name: 'Arsenal Short',
      image: 'arsenal_short.png',
      price: 200,
    },
  ];
  return (
    <div className="bg-orange-50">
      <div id="item" className="p-4 sm:p-10">
        <div className="sm:flex sm:justify-center">
          <div id="item-image">
            <img className="rounded-2xl border border-sky-800 sm:w-96" src={require(`../../assets/image/arsenal_ball.png`)} alt="" />
            <div className="sm:sr-only flex justify-center items-center mt-2 mb-2">
              <i className="fa-solid fa-chevron-left cursor-pointer"></i>
              <span className="px-4">1/5</span>
              <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" />
            </div>
            <div className="sr-only sm:not-sr-only grid grid-cols-4">
              <img className="w-20 rounded-xl mt-4 border border-sky-800 cursor-pointer hover:border-2" src={require(`../../assets/image/arsenal_ball.png`)} alt="" />
              <img className="w-20 rounded-xl mt-4 border border-sky-800 cursor-pointer hover:border-2" src={require(`../../assets/image/arsenal_ball.png`)} alt="" />
              <img className="w-20 rounded-xl mt-4 border border-sky-800 cursor-pointer hover:border-2" src={require(`../../assets/image/arsenal_ball.png`)} alt="" />
              <img className="w-20 rounded-xl mt-4 border border-sky-800 cursor-pointer hover:border-2" src={require(`../../assets/image/arsenal_ball.png`)} alt="" />
            </div>
          </div>
          <div id="item-info" className="sm:ml-10">
            <p className="font-bold text-3xl my-2 sm:my-4 sm:text-4xl">Arsenal Ball</p>
            <p className="my-2 sm:my-4 sm:text-xl">$10</p>
            <p className="my-1 sm:my-2 text-sm text-gray-700">Quantity</p>
            <div className="mr-4 w-fit rounded-3xl border border-sky-800 px-4 py-2 bg-white">
              <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
              <span className="mx-8">1</span>
              <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
            </div>
            <button className="mt-6 mb-2 w-full sm:w-96 sm:text-lg rounded-3xl border border-sky-800 bg-white py-2">Add to cart</button>
            <p className="text-sm sm:text-base sm:w-96">Lightweight conditioner rehydrates as it smoothers frizz, moisturizes dullness and restores shine</p>
          </div>
        </div>
        <div id="item-same" className="mt-10">
          <p className="font-bold text-xl sm:text-3xl py-4">Pairs well with</p>
          <div id="item-list" className="grid grid-cols-2 sm:grid-cols-8 sm:gap-8">
            {items.map((item, index) => {
              return (
                <Item addToCartFromHome={() => props.addToCartFromUser(item.name, item.image, item.price, 1)} key={index} image={`${item.image}`} name={`${item.name}`} price={`${item.price}`}></Item>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
