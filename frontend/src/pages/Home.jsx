import { NavLink, useLoaderData } from "react-router-dom";
import ProductCard from "../myComponents/ProductCard";

import HomepageBanner from "../myComponents/HomepageBanner";

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
        <NavLink to="#" className="text-gray-800 font-semibold">View all</NavLink>
      </div>
      <div className="sm:flex gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default Home;
