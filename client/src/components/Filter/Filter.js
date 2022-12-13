function Filter({ setPriceRange, setSort, totalProduct }) {
  return (
    <div className="text-sm xl:text-base flex-col sm:flex-row flex justify-between pt-8 sm:py-10 text-gray-600">
      <div id="filter-price">
        <span className="mr-3 sm:mr-0">Filter:</span>
        <span id="sort" className="ml-4 mr-2">
          <select onChange={(e) => setPriceRange(e.target.value)} className="text-sm xl:text-base" name="" id="">
            <option value="">Price</option>
            <option value="0-9">0$ - 9$</option>
            <option value="10-19">10$- 19$</option>
            <option value="20-29">Over 20$</option>
          </select>
        </span>
      </div>
      <div id="filter-sort" className="mt-2 sm:mt-0">
        <span className="">Sort by:</span>
        <span id="sort" className="ml-4 mr-2">
          <select onChange={(e) => setSort(e.target.value)} className="text-sm xl:text-base" name="" id="">
            <option value="">Feature</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
            <option value="PriceASC">Price, Low to High</option>
            <option value="PriceDESC">Price, High to Low</option>
          </select>
        </span>
      </div>
      <span className="mt-1 mb-2 sm:mb-0 ml-2 sm:ml-0 sm:mt-0 ">{totalProduct} products</span>
    </div>
  );
}

export default Filter;
