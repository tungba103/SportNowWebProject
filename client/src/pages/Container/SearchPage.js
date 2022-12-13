import { Filter, Item } from '../../components';
import { useEffect, useState } from 'react';
import { getProductSearch, getProductSearchByPriceRange, getProductSearchSorted } from '../../components/API/Product';
import { useParams } from 'react-router-dom';

function SearchPage(props) {
  const search = useParams();
  const [searchProducts, setSearchProducts] = useState();
  useEffect(() => {
    getProductSearch((data) => setSearchProducts(data), search.search);
  }, []);
  const setPriceRange = (priceRange) => {
    if (priceRange === '0-9') {
      getProductSearchByPriceRange((data) => setSearchProducts(data), search.search, '0', '9');
    } else if (priceRange === '10-19') {
      getProductSearchByPriceRange((data) => setSearchProducts(data), search.search, '10', '19');
    } else if (priceRange === '20-29') {
      getProductSearchByPriceRange((data) => setSearchProducts(data), search.search, '20', '29');
    } else {
      getProductSearch((data) => setSearchProducts(data), search.search);
    }
  };
  const setSort = (sort) => {
    if (sort === 'ASC') {
      getProductSearchSorted((data) => setSearchProducts(data), search.search, 'title', 'ASC');
    } else if (sort === 'DESC') {
      getProductSearchSorted((data) => setSearchProducts(data), search.search, 'title', 'DESC');
    } else if (sort === 'PriceASC') {
      getProductSearchSorted((data) => setSearchProducts(data), search.search, 'price', 'ASC');
    } else if (sort === 'PriceDESC') {
      getProductSearchSorted((data) => setSearchProducts(data), search.search, 'price', 'DESC');
    } else {
      getProductSearch((data) => setSearchProducts(data), search.search);
    }
  };
  return (
    <div id="container" className=" bg-orange-50 px-4 mt-24 sm:mt-32 sm:px-96 sm:py-10">
      <div id="ct-category" className="grid col-span-4 gap-2 flex"></div>
      <div>
        {typeof searchProducts !== 'undefined' && <Filter setPriceRange={(priceRange) => setPriceRange(priceRange)} setSort={(sort) => setSort(sort)} totalProduct={searchProducts.length} />}

        <div id="item-list" className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {typeof searchProducts === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            searchProducts.map((item, index) => {
              return <Item key={index} idProduct={item.idProduct} image={item.image} title={item.title} price={item.price} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
