import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useRestaurantMenu = (restaurantId) => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const { resId } = useParams();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5802725&lng=85.1660825&restaurantId=' +
            resId +
            '&submitAction=ENTER'
        );
        const data = await response.json();
        setRestaurant(data.data.cards[2].card.card.info);
        setMenu(
          data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
            .itemCards
        );
      } catch (error) {
        console.error('Error fetching restaurant menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  return { menu, loading, restaurant };
};

export default useRestaurantMenu;
