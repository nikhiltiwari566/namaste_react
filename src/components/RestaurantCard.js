import { IMG_CDN_URL } from '../utils/constants';

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className='bg-white m-2 p-2 w-65 shadow-lg rounded-lg min-h-80'>
      <img
        className='rounded-lg h-40 w-full object-cover shadow-md   '
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className='font-bold text-lg pt-1 truncate w-100%'>{name}</h2>
      <h5 className='text-gray-600 truncate w-100%'>{cuisines.join(', ')}</h5>
      <h6 className='text-gray-500'>{area}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: 'red' } : { color: 'white' }
          }
        >
          <i className='fa-solid fa-star'></i>
          {avgRating}
        </h4>
        <h4>{sla.lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
