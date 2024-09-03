

const ContactUs = () => {
  return (
    <div className="contact-us bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We`re here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-start mb-12">
       
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  No 4. Sarumi St.<br />
                  Business City, BC 12345<br />
                  Country
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">+234 7033962306</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">pexart74@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Visit Us
          </h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg">
            
            <p className="text-gray-500 py-28">Google Map Placeholder</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
