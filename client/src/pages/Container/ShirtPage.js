import { Filter, Item } from '../../components';
import { useEffect, useState } from 'react';
import { getProductByType, getProductByTypeAndPriceRange, getProductSortedByType } from '../../components/API/Product';

function ShirtPage(props) {
  const [shirtProducts, setShirtProducts] = useState();
  useEffect(() => {
    getProductByType((data) => setShirtProducts(data), 'shirt');
  }, []);
  const setPriceRange = (priceRange) => {
    if (priceRange === '0-9') {
      getProductByTypeAndPriceRange((data) => setShirtProducts(data), 'shirt', '0', '9');
    } else if (priceRange === '10-19') {
      getProductByTypeAndPriceRange((data) => setShirtProducts(data), 'shirt', '10', '19');
    } else if (priceRange === '20-29') {
      getProductByTypeAndPriceRange((data) => setShirtProducts(data), 'shirt', '20', '29');
    } else {
      getProductByType((data) => setShirtProducts(data), 'shirt');
    }
  };
  const setSort = (sort) => {
    if (sort === 'ASC') {
      getProductSortedByType((data) => setShirtProducts(data), 'shirt', 'title', 'ASC');
    } else if (sort === 'DESC') {
      getProductSortedByType((data) => setShirtProducts(data), 'shirt', 'title', 'DESC');
    } else if (sort === 'PriceASC') {
      getProductSortedByType((data) => setShirtProducts(data), 'shirt', 'price', 'ASC');
    } else if (sort === 'PriceDESC') {
      getProductSortedByType((data) => setShirtProducts(data), 'shirt', 'price', 'DESC');
    } else {
      getProductByType((data) => setShirtProducts(data), 'shirt');
    }
  };
  return (
    <div id="container" className=" bg-orange-50 px-4 mt-24 sm:mt-32 sm:px-96 sm:py-10">
      <div>
        {typeof shirtProducts !== 'undefined' && <Filter setPriceRange={(priceRange) => setPriceRange(priceRange)} setSort={(sort) => setSort(sort)} totalProduct={shirtProducts.length} />}

        <div id="item-list" className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {typeof shirtProducts === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            shirtProducts.map((item, index) => {
              return <Item key={index} idProduct={item.idProduct} image={item.image} title={item.title} price={item.price}></Item>;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ShirtPage;
