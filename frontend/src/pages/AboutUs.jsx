import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us bg-gray-50 py-16">
      <div className="container mx-auto px-4">
       
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to PexLuxora, your one-stop shop for all your fashion,
            electronics, and lifestyle needs. We are dedicated to providing you
            with the best quality products, focusing on affordability,
            exceptional customer service, and reliability.
          </p>
        </section>

        
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              PexLuxora was founded in 2022 with a simple vision: to make
              shopping a delightful and seamless experience for everyone. Over
              the years, we have grown from a small startup into one of the
              leading online stores, offering a wide range of products that meet
              the needs of modern consumers. We believe in delivering value and
              quality, and our commitment to this vision is what drives us every
              day.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Our Story"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </section>

     
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, ensuring that our
                customers receive the best products and services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Customer First
              </h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We are
                committed to providing excellent service and top-notch products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly strive to improve and innovate, offering new
                products and better experiences to our customers.
              </p>
            </div>
          </div>
        </section>

        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Pex Adeayo
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                John Doe
              </h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Alission Johnson
              </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </section>

        
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Join the PexLuxora Family!
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We invite you to explore our wide range of products and become part
            of the PexLuxora community. Your satisfaction is our priority, and
            we`re here to make your shopping experience exceptional.
          </p>
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Start Shopping
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
