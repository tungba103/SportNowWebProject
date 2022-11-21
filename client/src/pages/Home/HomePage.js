import { Item, Filter, ContainerItem } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Card } from 'flowbite-react';
function HomePage(props) {
  return (
    <div id="container" className=" bg-orange-50 px-4 pt-4 sm:mt-0 sm:px-96 sm:py-10">
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
      <ContainerItem />
    </div>
  );
}

export default HomePage;
