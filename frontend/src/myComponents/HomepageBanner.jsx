import Banner from "../assets/images/main/BigBanner.png";
import hoodedMan from "../assets/images/main/menhoodie.png";
import main from "../assets/images/main/main.png";

const HomepageBanner = () => {
  return (
    <div className="relative w-full overflow-hidden pt-2 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-[500px]">
        <div className="relative h-64 md:h-auto">
          <img
            src={Banner}
            alt="Home Banner"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <h2 className="text-white text-xl md:text-3xl font-semibold">
              Welcome to PexLuxora
            </h2>
          </div>
        </div>

        <div className="relative h-64 md:h-auto">
          <img
            src={hoodedMan}
            alt="Exclusive Products"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <h2 className="text-white text-xl md:text-3xl font-semibold">
              Exclusive Products
            </h2>
          </div>
        </div>

        <div className="relative h-64 md:h-auto">
          <img
            src={main}
            alt="Shop Now"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <h2 className="text-white text-xl md:text-3xl font-semibold">
              Shop Now
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
