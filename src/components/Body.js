import { restaurantList } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import OfflinePage from './OfflinePage';
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const isOnlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    setRestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  if (isOnlineStatus === false) {
    return <OfflinePage />;
  }

  if (restaurants.length === 0) {
    console.log('restaurants', restaurants.length);

    return <Shimmer />;
  }
  console.log('restaurants', restaurants);

  return (
    <>
      <div className=' items-center m-2 p-2 bg-amber-600'>
        <input
          type='text'
          className='border border-gray-300 rounded p-2 m-2 w-1/3 '
          placeholder='Search a restaurant you want...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className='bg-pink-500 text-white px-4 py-2 rounded mb-2 capitalize font-bold'
          onClick={() => {
            // filter the data
            const data = restaurants.filter((restaurant) =>
              restaurant?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className=' flex flex-wrap justify-center bg-amber-300'>
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
