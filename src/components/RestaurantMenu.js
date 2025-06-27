import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu'; // Assuming you have this custom hook
import RestaurantCategories from './ReastaurantCategories'; // Assuming you have this component
const RestaurantMenu = () => {
  const { menu, loading, restaurant, categories } = useRestaurantMenu();

  if (loading) return <Shimmer />;

  return (
    <div className=' text-center'>
      <h1 className='font-bold my-6 text-lg'>{restaurant.name}</h1>
      <p className='text-gray-600'>{restaurant.cuisines.join(', ')}</p>
      {categories.map((category) => (
        <RestaurantCategories key={category.card.card.title} data={category} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
