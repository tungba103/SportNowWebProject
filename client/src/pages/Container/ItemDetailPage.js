import { faChevronCircleDown, faChevronRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from '../../components/Item/Item';
import { getProductByIdProduct, getProductSearch } from '../../components/API/Product';
import { createCart } from '../../components/API/Account';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function ItemDetailPage(props) {
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
  const id = useParams();
  const [products, setProducts] = useState();
  const [quantity, setQuantity] = useState(1);
  const [relativeProducts, setRelativeProducts] = useState();
  useEffect(() => {
    getProductByIdProduct((data) => setProducts(data), id.id);
  }, [id.id]);
  if (typeof products !== 'undefined') getProductSearch((data) => setRelativeProducts(data), products[0].image.slice(0, 6));
  return (
    <div className="bg-orange-50 mt-32">
      <div id="item" className="p-4 sm:p-10">
        {typeof products === 'undefined' ? (
          <div className="sm:flex sm:justify-center">
            <div id="item-image">
              <img className="rounded-2xl border border-sky-800 sm:w-96" src={require(`../../assets/web_image/shirt.png`)} alt="" />
              <div className="sm:sr-only flex justify-center items-center mt-2 mb-2">
                <i className="fa-solid fa-chevron-left cursor-pointer"></i>
                <span className="px-4">1/5</span>
                <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" />
              </div>
            </div>
            <div id="item-info" className="sm:ml-10">
              <p className="font-bold text-3xl my-2 sm:my-4 sm:text-4xl">Product</p>
              <p className="my-2 sm:my-4 sm:text-xl">$0</p>
              <p className="my-1 sm:my-2 text-sm text-gray-700">Quantity</p>
              <div className="mr-4 w-fit rounded-3xl border border-sky-800 px-4 py-2 bg-white">
                <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
                <span className="mx-8">0</span>
                <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
              </div>
              <button className="mt-6 mb-2 w-full sm:w-96 sm:text-lg rounded-3xl border border-sky-800 bg-white py-2">Add to cart</button>
              <p className="text-sm sm:text-base sm:w-96">Description</p>
            </div>
          </div>
        ) : (
          <div className="sm:flex sm:justify-center">
            <div id="item-image">
              <img className="rounded-2xl border border-sky-800 sm:w-96" src={require(`../../assets/image/${products[0].image}`)} alt="" />
              <div className="sm:sr-only flex justify-center items-center mt-2 mb-2">
                <i className="fa-solid fa-chevron-left cursor-pointer"></i>
                <span className="px-4">1/5</span>
                <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" />
              </div>
            </div>
            <div id="item-info" className="sm:ml-10">
              <p className="font-bold text-3xl my-2 sm:my-4 sm:text-4xl">{products[0].title}</p>
              <p className="my-2 sm:my-4 sm:text-xl">${products[0].price}</p>
              <p className="my-1 sm:my-2 text-sm text-gray-700">Quantity</p>
              <div className="mr-4 w-fit rounded-3xl border border-sky-800 px-4 py-2 bg-white">
                <FontAwesomeIcon icon={faMinus} className="cursor-pointer" onClick={() => setQuantity(quantity - 1)} />
                <span className="mx-8">{quantity}</span>
                <FontAwesomeIcon icon={faPlus} className="cursor-pointer" onClick={() => setQuantity(quantity + 1)} />
              </div>
              {sessionStorage.getItem('username') != null && (
                <button
                  onClick={() => {
                    createCart(sessionStorage.getItem('username'), id.id, quantity);
                  }}
                  className="mt-6 mb-2 w-full sm:w-96 sm:text-lg rounded-3xl border border-sky-800  px-4  sm:py-3 bg-orange-100 hover:bg-orange-400 py-2"
                >
                  Add to cart
                </button>
              )}
              <p className="text-sm sm:text-base sm:w-96">{products[0].description}</p>
            </div>
          </div>
        )}
        <div id="item-same" className="mt-10">
          <p className="font-bold text-xl sm:text-3xl py-4">Pairs well with</p>
          <div id="item-list" className="grid grid-cols-2 sm:grid-cols-8 sm:gap-8">
            {typeof relativeProducts === 'undefined' ? (
              <h1>Loading...</h1>
            ) : (
              relativeProducts.map((item, index) => {
                return <Item key={index} image={`${item.image}`} title={`${item.title}`} price={`${item.price}`} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
