import { Link } from 'react-router';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail
} from 'lucide-react';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  return (
    <footer className="bg-gradient-to-r  from-[#02253c] via-[#17295f] to-[#04253e] md:py-8 py-6 px-6  mt-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 max-sm:text-center">
        <div>
          <div className="mb-6 max-sm:mb-3  text-white">
            <span className="text-2xl max-sm:text-xl font-bold text-[#7a5af8] dark:text-gray-200">About </span>
          </div>
          <ul className="space-y-3 mt-4">
            <li><Link to="/all-models" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">About Us </Link></li>
            <li><Link to="/add-model" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Become Seller </Link></li>
            <li><Link to="/profile" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Jobs on Freeio</Link></li>
            <li><Link to="/auth/login" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Services Freeio </Link></li>
            <li><Link to="/auth/login" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl max-sm:text-xl font-bold mb-6 max-sm:mb-3  text-[#7a5af8] dark:text-gray-200">Categories</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Design & Creative</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Development & IT</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Programming & Tech</Link></li>
            <li><Link to="/resources" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Digital Marketing</Link></li>
            <li><Link to="/resources" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Finance & Accounting</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl max-sm:text-xl font-bold mb-6 max-sm:mb-3  text-[#7a5af8] dark:text-gray-200">Support</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Help & Support </Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">FAQ Freeio</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Services </Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Terms of Service</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl max-sm:text-center max-sm:text-xl font-bold mb-6 max-sm:mb-3 text-[#7a5af8] dark:text-gray-200">Connect With Us</h3>
          <div className='space-y-6'>
            <div>
              <fieldset className="fieldset  relative md:w-full  w-[70%] mx-auto md:pr-[25%] ">
                <input type="email" className="input w-full  footerSend hover:border-blue-800  focus:outline-0" placeholder="Your Email Address" />
                <button className="absolute z-10 top-0% right-0 font-medium w-[25%] p-4 cursor-pointer">Send</button>
              </fieldset>
            </div>
            <div className="flex space-x-4 max-sm:justify-center mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-blue-700">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-pink-600">
                <Instagram size={24} />
              </a>

            </div>
            <div>
              <a
                href="mailto:support@sajib99design.com"
                className="flex items-center max-sm:justify-center text-gray-400 dark:text-gray-200 hover:text-orange-900"
              >
                <Mail size={18} className="mr-2" /> support@Sajib99design.com
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t md:mb-0  border-orange-900 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-200">
          © {currentYear} Super Products . All Rights Reserved.
          <span className="ml-4">
            <Link to="/" className="hover:text-blue-600 mr-3">Privacy Policy</Link>
            <Link to="/" className="hover:text-blue-600">Terms of Service</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;