import { Filter, Item } from '../../components';
import { useEffect, useState } from 'react';
import { getProductByType, getProductByTypeAndPriceRange, getProductSortedByType } from '../../components/API/Product';

function ShortPage(props) {
  const [shortProducts, setShortProducts] = useState();
  useEffect(() => {
    getProductByType((data) => setShortProducts(data), 'short');
  }, []);
  const setPriceRange = (priceRange) => {
    if (priceRange === '0-9') {
      getProductByTypeAndPriceRange((data) => setShortProducts(data), 'short', '0', '9');
    } else if (priceRange === '10-19') {
      getProductByTypeAndPriceRange((data) => setShortProducts(data), 'short', '10', '19');
    } else if (priceRange === '20-29') {
      getProductByTypeAndPriceRange((data) => setShortProducts(data), 'short', '20', '29');
    } else {
      getProductByType((data) => setShortProducts(data), 'short');
    }
  };
  const setSort = (sort) => {
    if (sort === 'ASC') {
      getProductSortedByType((data) => setShortProducts(data), 'short', 'title', 'ASC');
    } else if (sort === 'DESC') {
      getProductSortedByType((data) => setShortProducts(data), 'short', 'title', 'DESC');
    } else if (sort === 'PriceASC') {
      getProductSortedByType((data) => setShortProducts(data), 'short', 'price', 'ASC');
    } else if (sort === 'PriceDESC') {
      getProductSortedByType((data) => setShortProducts(data), 'short', 'price', 'DESC');
    } else {
      getProductByType((data) => setShortProducts(data), 'short');
    }
  };
  return (
    <div id="container" className=" bg-orange-50 px-4 mt-24 sm:mt-32 sm:px-96 sm:py-10">
      <div>
        {typeof shortProducts !== 'undefined' && <Filter setPriceRange={(priceRange) => setPriceRange(priceRange)} setSort={(sort) => setSort(sort)} totalProduct={shortProducts.length} />}

        <div id="item-list" className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {typeof shortProducts === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            shortProducts.map((item, index) => {
              return <Item key={index} idProduct={item.idProduct} image={item.image} title={item.title} price={item.price}></Item>;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ShortPage;
