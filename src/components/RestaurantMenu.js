import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();
  console.log('resId:', resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5802725&lng=85.1660825&restaurantId=' +
          resId +
          '&submitAction=ENTER'
      );
      const data = await response.json();

      setRestaurant(data.data.cards[2].card.card.info);
      setMenuItems(
        data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards
      );
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  if (!restaurant) return <Shimmer />;
  console.log(menuItems);

  return (
    <div className='restaurant-menu'>
      <h1>{restaurant.name}</h1>
      <h3>{restaurant.cuisines.join(', ')}</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
