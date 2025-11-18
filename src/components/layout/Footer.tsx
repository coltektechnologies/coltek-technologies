import { NavLink } from "react-router-dom"
import images from "../../assets/images/images"

const Footer = () => {
  return (
    // Main footer container with responsive padding and background
    <footer className="w-full" style={{ backgroundColor: 'var(--footer-bg-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12 lg:py-16">
        {/* Footer Top Section - Grid layout for all columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 md:mb-12">
          
          {/* Column 1: About/Logo Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            {/* Logo */}
            <div className="mb-4">
              <img 
                src={images.logo} 
                className="h-20 w-auto" 
                alt="Coltek Technologies Logo" 
              />
            </div>
            
            {/* Mission Statement */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming potentials into excellence 
              by inspiring growth, fostering innovation 
              and leading with integrity
            </p>
            
            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-white font-bold mb-3 text-sm">
                Subscribe to our newsletter
              </p>
              
              {/* Email Input with Submit Button */}
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-12 py-2.5 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button 
                  type="button" 
                  className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <img 
                    src={images.vector} 
                    alt="" 
                    className="h-4 w-4"
                  />
                </button>
              </div>
            </div>
          </div>
          
          {/* Column 2: Support/Contact Information */}
          <div className="space-y-3">
            <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
            
            {/* Address */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Sunyani - Ghana, Fiapre Notre Dame<br />
              Abeka Donkor Ave,<br />
              BS-00221155-08
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href="mailto:info@coltek.com" 
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                info@coltek.com
              </a>
              <a 
                href="tel:+233244567890" 
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                +233 244 567 890
              </a>
            </div>
          </div>
          
          {/* Column 3: Account Links */}
          <div className="space-y-3">
            <h4 className="text-white text-lg font-semibold mb-4">Account</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/login" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  Login / Register
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  Get in Touch
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink 
                  to="/privacy" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/terms" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/faq" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-gray-300 hover:text-white text-sm transition-colors block"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Download App & Social Media Section */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Download App */}
            <div className="space-y-3">
              <h4 className="text-white text-lg font-semibold">Download App</h4>
              <div className="flex gap-3">
                <img 
                  src={images.app} 
                  alt="Download on App Store and Google Play" 
                  className="w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="text-white text-lg font-semibold md:text-right">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <img 
                    src={images.fb} 
                    alt="" 
                    className="h-5 w-5"
                  />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Visit our Twitter page"
                >
                  <img 
                    src={images.twiter} 
                    alt="" 
                    className="h-5 w-5"
                  />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Visit our LinkedIn page"
                >
                  <img 
                    src={images.linkedin} 
                    alt="" 
                    className="h-5 w-5"
                  />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Visit our Instagram page"
                >
                  <img 
                    src={images.instagram} 
                    alt="" 
                    className="h-5 w-5"
                  />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Visit our YouTube channel"
                >
                  <img 
                    src={images.fb} 
                    alt="" 
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom - Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Coltek Technologies. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer