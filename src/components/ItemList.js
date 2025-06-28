import { addItem } from '../utils/cartSlice';
import { IMG_CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  console.log('items', items);

  return (
    <div className=''>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className='my-2 p-2 border-b text-left'>
          <div className='flex justify-between items-start mb-2'>
            <div className=' items-center mb-2'>
              <h2 className='font-semibold'>{item?.card?.info?.name}</h2>
              <span className='text-green-600 font-bold mt-0.5'>
                ₹{item?.card?.info?.price / 100}
              </span>
            </div>
            <div>
              <div className='absolute bg-white ml-4 mt-12 rounded shadow-lg flex items-center gap-2'>
                <button
                  className='bg-green-500 text-white p-0.5 rounded'
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
              <img
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                className='w-16 h-16 rounded'
              />
            </div>
          </div>
          <p className='text-gray-600 pr-20'>{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
