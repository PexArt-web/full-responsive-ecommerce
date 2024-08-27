import { Button } from "@/components/ui/button";

const ProductCard = ({ name, imageURL, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 sm:w-60 p-4">
      <div className="h-56 w-full bg-gray-100 flex justify-center items-center">
        <img
          src={imageURL}
          alt={name}
          className="h-full w-auto object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>

        {/* Product Price */}
        <p className="mt-2 text-gray-600 text-xl">${price}</p>

        {/* Product Description */}
        <p className="text-gray-500 mt-2 text-sm">
          {description.length > 60
            ? `${description.slice(0, 60)}...`
            : description}
        </p>

        <div className="mt-4 flex gap-2 justify-between items-center">
          <Button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Add to Cart
          </Button>

          <Button className = "text-blue-600 border border-blue-600 px-1 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300">View Details</Button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
