import { NavLink, useLoaderData, Link } from "react-router-dom";
// import ProductCard from "../myComponents/cardComponent/ProductCard";

import HomepageBanner from "../myComponents/HomepageBanner";
import DiscountProductCard from "../myComponents/cardComponent/DiscountProductcard";
import Footer from "../myComponents/Footer";

const Home = () => {
  const products = useLoaderData();
  return (
    <>
      <div className="pb-4">
        <HomepageBanner />
      </div>
      <div className="p-2 px-8 bg-red-200 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-start d-block ">Sale</h1>
          <p className="text-sm text-gray-500">Super summer sale</p>
        </div>
        <Link to="#" className="text-gray-800 font-semibold">
          View all
        </Link>
      </div>
      <div className="sm:flex gap-4 p-4 sm:mx-auto">
        {products.map((product) => (
          // <ProductCard key={product.id} {...product/>} />
          <DiscountProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="p-2 flex items-center justify-between px-8 bg-red-200">
        <div>
          <h1 className="text-2xl font-bold text-start">New Arrivals</h1>
          <p className="text-sm text-gray-500">Latest products</p>
        </div>
        <Link to="#" className="text-gray-800 font-semibold">
          View all
        </Link>
      </div>

      <div className="sm:flex gap-4 p-4">
        {products.map((product) => (
          // <ProductCard key={product.id} {...product/>} />
          <DiscountProductCard key={product.id} {...product} />
        ))}
      </div>

      <Footer/>
    </>
  );
};

export default Home;
