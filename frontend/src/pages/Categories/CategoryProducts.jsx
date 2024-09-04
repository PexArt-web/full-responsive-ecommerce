
import { useLoaderData } from "react-router-dom";
import { HeartIcon } from '@heroicons/react/24/solid'; // Solid version of the heart icon


const CategoryProducts = () => {
  const categoryProducts = useLoaderData();

  
 
  return (
    <div>
      { categoryProducts.length ?  (categoryProducts.map((products) => (
        <div key={products.id}>
          <div className="relative w-72 border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative">
        <img src={products.imageURL} alt={products.name} className="w-full h-auto object-cover" />
        <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg">
          <HeartIcon className="w-6 h-6 text-red-500" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{products.name}</h3>
        {/* <p className="text-sm text-gray-600 mb-2">{description}</p> */}
        <span className="text-xl font-bold">${products.price}</span>
      </div>
    </div>
        </div>
      ))
      ) : (
        <p>No products found in this category</p>
      )
      }
    </div>
  )
};

export default CategoryProducts;


