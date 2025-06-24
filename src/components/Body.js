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
    return <Shimmer />;
  }

  return (
    <>
      <div className='search-container'>
        <div className='online-status'>
          {isOnlineStatus ? (
            <div className='status-container'>
              <div className='status-icon'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='12' r='10' fill='#28a745' />
                </svg>
              </div>
              <span className='status-indicator online'>Online</span>
            </div>
          ) : (
            <span className='status-indicator offline'>Offline</span>
          )}
        </div>
        <input
          type='text'
          className='search-input'
          placeholder='Search a restaurant you want...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className='search-btn'
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
      <div className='restaurant-list'>
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
