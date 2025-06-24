import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu'; // Assuming you have this custom hook

const RestaurantMenu = () => {
  const { menu, loading, restaurant } = useRestaurantMenu();

  if (loading) return <Shimmer />;

  return (
    <div className='restaurant-menu'>
      <h1>{restaurant.name}</h1>
      <h3>{restaurant.cuisines.join(', ')}</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
