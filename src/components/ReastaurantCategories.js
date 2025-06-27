import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategories = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div
        className='w-6/12 mx-auto my-4 bg-gray-100 p-4 rounded shadow-lg p-4 '
        onClick={() => handleClick()}
      >
        <div className='flex justify-between items-center mb-4'>
          <span className='font-bold underline'>
            {' '}
            {data.card.card.title} ({data.card.card.itemCards.length})
          </span>
          <span>==</span>
        </div>
        {showItems && <ItemList items={data.card.card.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
