import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Avatar, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getProductSearch } from '../API/Product';
import { Link, useNavigate } from 'react-router-dom';
function Search(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchProducts, setSearchProduct] = useState();
  useEffect(() => {
    getProductSearch((data) => setSearchProduct(data), search);
  }, [search]);
  return (
    <div className={`${props.visibility} fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-center bg-orange-600 sm:h-36`}>
      <div className="relative flex h-12 items-center justify-between rounded-3xl px-4">
        <TextInput
          onKeyDown={(e) => {
            setSearch(e.target.value);
            if (e.key === 'Enter') {
              console.log(e.target.value);
              navigate(`/search/${search}`);
              props.setDisplaySearch('hidden');
            }
          }}
          className="w-60 sm:w-96 "
          sizing={'md'}
          shadow={false}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FontAwesomeIcon
          onClick={() => {
            navigate(`/search/${search}`);
            props.setDisplaySearch('hidden');
          }}
          icon={faMagnifyingGlass}
          className="cursor-pointer pl-3 text-xl text-white "
        ></FontAwesomeIcon>
        <div className="absolute top-12 left-4 w-96 flex flex-col bg-orange-100 rounded-b-xl">
          {typeof searchProducts === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            searchProducts.map((searchProduct, i) => {
              return (
                <Link
                  onClick={() => {
                    setSearch('');
                    props.setDisplaySearch('hidden');
                  }}
                  to={`/detail/${searchProduct.idProduct}`}
                  key={i}
                  className="px-6 py-2 hover:bg-orange-200  cursor-pointer flex justify-start items-center rounded-xl"
                >
                  <Avatar img={require(`../../assets/image/${searchProduct.image}`)} rounded={true} />
                  <p className="ml-6 font-bold">{searchProduct.title}</p>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <FontAwesomeIcon onClick={() => props.setDisplaySearch('hidden')} className="ml-4 cursor-pointer text-3xl text-white" icon={faXmark}></FontAwesomeIcon>
    </div>
  );
}

export default Search;
