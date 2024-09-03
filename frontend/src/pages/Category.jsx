import { Link } from "react-router-dom";


const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGpjLP9sAzw3vDeUmhx7CQZxJAn1wUmxLhw&s",
  },
  {
    id: 2,
    name: "Clothes & Fashions",
    image: "https://media.istockphoto.com/id/1496888665/photo/rejuvenated-trendy-mature-woman-with-short-hair-stands-outdoors-in-city-street-wears-youth.webp?a=1&b=1&s=612x612&w=0&k=20&c=LM53Ut2QpLBdrc3BA7oR7vw1sCrY9-0Fu3aCEQEIgxk=",
  },
  {
    id: 3,
    name: "Home Appliances",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Books",
    image: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1595838788874-a9dbc04f3d7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Beauty & Health",
    image: "https://plus.unsplash.com/premium_photo-1715604350464-5d8c2cd4d61a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CategoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 ">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            key={category.id}
          >
            <div className="md:w-1/2">
              <img
                className="w-full h-48 object-cover"
                src={category.image}
                alt={category.name}
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {category.name}
                </h3>
              </div>
              <Link
                to ={category.name}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 text-center"
              >
               View Products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
