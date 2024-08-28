import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">PexLuxora</h3>
          <p className="text-gray-400">
            Your company description goes here. Briefly explain what your store offers and why customers should trust your brand.
          </p>
          <p className="text-gray-400 mt-4">© 2024 Your Company. All rights reserved.</p>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <ul className="sm:flex space-x-4 ">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* <i className="fab fa-facebook-f"></i> Facebook */}
                <FontAwesomeIcon icon = {faFacebook}/> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon = {faInstagram}/> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon = {faTwitter}/> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon = {faLinkedin}/> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates, offers, and more.</p>
          <form className="flex">
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-700" 
              placeholder="Enter your email"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;