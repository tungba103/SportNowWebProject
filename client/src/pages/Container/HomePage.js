import { Filter, Item } from '../../components';
import { Carousel, Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getAllProduct, getProductByPriceRange, getProductSorted } from '../../components/API/Product';

function HomePage(props) {
  const [products, setProducts] = useState();
  useEffect(() => {
    getAllProduct((data) => setProducts(data));
  }, []);
  const setPriceRange = (priceRange) => {
    if (priceRange === '0-9') {
      getProductByPriceRange((data) => setProducts(data), '0', '9');
    } else if (priceRange === '10-19') {
      getProductByPriceRange((data) => setProducts(data), '10', '19');
    } else if (priceRange === '20-29') {
      getProductByPriceRange((data) => setProducts(data), '20', '29');
    } else {
      getAllProduct((data) => setProducts(data));
    }
  };
  const setSort = (sort) => {
    if (sort === 'ASC') {
      getProductSorted((data) => setProducts(data), 'title', 'ASC');
    } else if (sort === 'DESC') {
      getProductSorted((data) => setProducts(data), 'title', 'DESC');
    } else if (sort === 'PriceASC') {
      getProductSorted((data) => setProducts(data), 'price', 'ASC');
    } else if (sort === 'PriceDESC') {
      getProductSorted((data) => setProducts(data), 'price', 'DESC');
    } else {
      getAllProduct((data) => setProducts(data));
    }
  };
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
      <div>
        {typeof products !== 'undefined' && <Filter setPriceRange={(priceRange) => setPriceRange(priceRange)} setSort={(sort) => setSort(sort)} totalProduct={products.length} />}
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
