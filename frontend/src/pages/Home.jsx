import { useLoaderData } from "react-router-dom";
import ProductCard from "../myComponents/Card";

import HomepageBanner from "../myComponents/HomepageBanner";

const Home = () => {
  const products = useLoaderData();
  return (
    <>
      <div>
        <HomepageBanner />
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
