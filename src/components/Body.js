import { restaurantList } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
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
    console.log(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className='search-container'>
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
