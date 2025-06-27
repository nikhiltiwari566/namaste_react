import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useRestaurantMenu = (restaurantId) => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
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
        const categories =
          data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (c) =>
              c.card.card?.['@type'] ===
              'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
          );
        setCategories(categories);
      } catch (error) {
        console.error('Error fetching restaurant menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  return { menu, loading, restaurant, categories };
};

export default useRestaurantMenu;
