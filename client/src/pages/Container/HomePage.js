import { Item } from '../../components';
import { Carousel, Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getAllProduct } from '../../components/API/Product';

function HomePage(props) {
  const [products, setProducts] = useState();
  useEffect(() => {
    getAllProduct((data) => setProducts(data));
  }, []);
  return (
    <div id="container" className=" bg-orange-50 px-4 mt-24 sm:mt-32 sm:px-96 sm:py-10">
      <div id="ct-image" className="">
        <div className="h-56 xl:h-96">
          <Carousel slideInterval={1000}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
        <Card className="mt-4" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Yours, but better.</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Choose on your way with appropriate prices.</p>
        </Card>
      </div>
      <div id="ct-category" className="grid col-span-4 gap-2 flex"></div>
      <div>
        <div className="text-sm xl:text-base flex-col sm:flex-row flex justify-between pt-8 sm:py-10 text-gray-600">
          <div id="filter-price">
            <span className="mr-3 sm:mr-0">Filter:</span>
            <span id="sort" className="ml-4 mr-2">
              <select className="text-sm xl:text-base" name="" id="">
                <option value="">Price</option>
                <option value="">0$ - 10$</option>
                <option value="">10$- 20$</option>
                <option value="">Over 20$</option>
              </select>
            </span>
          </div>
          <div id="filter-sort" className="mt-2 sm:mt-0">
            <span className="">Sort by:</span>
            <span id="sort" className="ml-4 mr-2">
              <select className="text-sm xl:text-base" name="" id="">
                <option value="">Feature</option>
                <option value="">A-Z</option>
                <option value="">Z-A</option>
                <option value="">Price, high to low</option>
                <option value="">Price, low to high</option>
              </select>
            </span>
          </div>
          {typeof products === 'undefined' ? (
            <span className="mt-1 mb-2 sm:mb-0 ml-2 sm:ml-0 sm:mt-0 ">... products</span>
          ) : (
            <span className="mt-1 mb-2 sm:mb-0 ml-2 sm:ml-0 sm:mt-0 ">{products.length} products</span>
          )}
        </div>
        <div id="item-list" className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {typeof products === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            products.map((item, index) => {
              return <Item key={index} idProduct={item.idProduct} image={item.image} title={item.title} price={item.price} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
