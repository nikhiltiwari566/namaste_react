import { IMG_CDN_URL } from '../utils/constants';

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  sla,
  costForTwo,
  avgRating,
  isOpen,
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
            avgRating < 4 ? { backgroundColor: 'red' } : { color: 'black' }
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

const withOpenStatus = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute ml-4 p-1 bg-black rounded-md text-sm font-semibold m-2'>
          {props.isOpen ? (
            <span className='text-green-500'>Open</span>
          ) : (
            <span className='text-red-500'>Closed</span>
          )}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default withOpenStatus(RestaurantCard);
