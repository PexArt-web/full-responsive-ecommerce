import { useState } from "react";


const DiscountProductCard = ({ name, imageURL, description, price }) => {
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(20);
  const [originalPrice, setOriginalPrice] = useState(12)
  const [rating, setRating] = useState()

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative bg-white hover:shadow-lg rounded-lg overflow-hidden w-72">
    
      {discountPercent > 0 && (
        <div className="absolute top-1 left-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          {discountPercent}% OFF  
        </div>
      )}

      
      <img src={imageURL} alt={name} className="w-full h-48 object-cover" />

      {/* Favorite Heart Button */}
      <button
        onClick={handleFavorite}
        className="absolute top-2 right-2 text-gray-800"
      >
        {isFavorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        )}
      </button>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        
        {/* Price & Discount */}
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-gray-900 font-semibold">${price.toFixed(2)}</span>
          {discountPercent > 0 && (
            <span className="text-gray-500 line-through text-sm">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Star Rating */}
        {/* <div className="flex items-center space-x-1 mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
              ⭐
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default DiscountProductCard;
