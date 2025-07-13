import { FaStar, FaHeart } from 'react-icons/fa';

const Card = ({ image, title, price, nights, rating, isGuestFav }) => {
  return (
    <div className="w-full max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer">
      
      {/* Image Container */}
      <div className="relative w-full h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* Heart Icon */}
        <FaHeart className="absolute top-2 right-2 text-white bg-black/40 p-1 rounded-full text-xl" />

        {/* Guest Favourite Badge */}
        {isGuestFav && (
          <span className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded-xl font-medium shadow">
            Guest favourite
          </span>
        )}
      </div>

      {/* Text Content */}
      <div className="mt-2 text-sm text-gray-800">
        <p className="font-semibold">{title}</p>
        <div className='flex items-center'>
        <p className="text-gray-600">₹{price} for {nights} nights</p>
        <div className="flex items-center text-sm mt-1 pl-3">
          <FaStar className="text-grey-100 mr-1" />
          <span>{rating}</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
