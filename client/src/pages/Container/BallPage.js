import { Filter, Item } from '../../components';
import { useEffect, useState } from 'react';
import { getProductByType, getProductByTypeAndPriceRange, getProductSortedByType } from '../../components/API/Product';

function BallPage(props) {
  const [ballProducts, setBallProducts] = useState();
  useEffect(() => {
    getProductByType((data) => setBallProducts(data), 'ball');
  }, []);
  const setPriceRange = (priceRange) => {
    if (priceRange === '0-9') {
      getProductByTypeAndPriceRange((data) => setBallProducts(data), 'ball', '0', '9');
    } else if (priceRange === '10-19') {
      getProductByTypeAndPriceRange((data) => setBallProducts(data), 'ball', '10', '19');
    } else if (priceRange === '20-29') {
      getProductByTypeAndPriceRange((data) => setBallProducts(data), 'ball', '20', '29');
    } else {
      getProductByType((data) => setBallProducts(data), 'ball');
    }
  };
  const setSort = (sort) => {
    if (sort === 'ASC') {
      getProductSortedByType((data) => setBallProducts(data), 'ball', 'title', 'ASC');
    } else if (sort === 'DESC') {
      getProductSortedByType((data) => setBallProducts(data), 'ball', 'title', 'DESC');
    } else if (sort === 'PriceASC') {
      getProductSortedByType((data) => setBallProducts(data), 'ball', 'price', 'ASC');
    } else if (sort === 'PriceDESC') {
      getProductSortedByType((data) => setBallProducts(data), 'ball', 'price', 'DESC');
    } else {
      getProductByType((data) => setBallProducts(data), 'ball');
    }
  };
  return (
    <div id="container" className=" bg-orange-50 px-4 mt-24 sm:mt-32 sm:px-96 sm:py-10">
      <div>
        {typeof ballProducts !== 'undefined' && <Filter setPriceRange={(priceRange) => setPriceRange(priceRange)} setSort={(sort) => setSort(sort)} totalProduct={ballProducts.length} />}
        <div id="item-list" className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {typeof ballProducts === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            ballProducts.map((item, index) => {
              return <Item key={index} idProduct={item.idProduct} image={item.image} title={item.title} price={item.price}></Item>;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default BallPage;
