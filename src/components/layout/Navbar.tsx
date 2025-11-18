import { NavLink } from "react-router-dom"
import images from "../../assets/images/images"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  // Handle click outside menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Get references to the menu and button
      const menu = document.querySelector('.mobile-menu');
      const menuButton = document.querySelector('.mobile-menu-button');
      const target = event.target as Node | null;
      
      // If menu is open and click is outside both menu and button
      if (showMobileMenu && menu && target && !menu.contains(target) && 
          (!menuButton || !menuButton.contains(target))) {
        setShowMobileMenu(false);
        return; // Prevent any other handlers from running
      }
      
      // Existing dropdown handling
      if (showDropdown && target && !(target as Element).closest('.about-dropdown')) {
        setShowDropdown(false);
      }
    };

    // Always add the event listener, but check conditions inside
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileMenu, showDropdown]);

  return (
    <div 
      className="flex justify-between top-0 left-0 right-0" 
      style={{ backgroundColor: 'var(--slider-track-color)' }}
    >
      <div className=" w-full max-w-screen-xl mx-auto flex justify-between items-center py-2 px-4 md:px-10 lg:px-20">
        <img src={images.logo} className="w-25" alt="" />
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 style={{ color: 'var(--text-color)' }} items-center relative">
          <NavLink to="/"
           className={({ isActive }) =>
            `relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
              isActive ? 'text-blue-500' : 'text-white hover:text-onhoveryellow'
            }`
          }
          >
          Home
          </NavLink>
          <NavLink to="/about"
          className={({ isActive }) =>
            `relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
              isActive ? 'text-blue-500' : 'text-white hover:text-onhoveryellow'
            }`
          }>
            About
            </NavLink>
          <NavLink to="/services"
          className={({ isActive }) =>
            `relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
              isActive ? 'text-blue-500' : 'text-white hover:text-onhoveryellow'
            }`
          }>
          Services
          </NavLink>
          <NavLink to="/blog"
          className={({ isActive }) =>
            `relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
              isActive ? 'text-blue-500' : 'text-white hover:text-onhoveryellow'
            }`
          }
          >
          For Business
          </NavLink>
          <NavLink to="/contact"
          className={({ isActive }) =>
            `relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
              isActive ? 'text-blue-500' : 'text-white hover:text-onhoveryellow'
            }`
          }
          >
          Contact
          </NavLink>
        </ul>

        {/* Desktop Button */}
        <button  className=" px-6 py-2 rounded-full " style={{ 
            backgroundColor: 'var(--nav-button-bg)',
            color: 'var(--nav-button-text-color)'
          }}>Get a Quote</button>

          {/* Mobile Menu Icon - Only show on mobile */}
          <div className="mobile-menu-button md:hidden cursor-pointer" onClick={() => setShowMobileMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>

        {/* Mobile Navigation Menu */}
        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
        )}
        <div 
          className={`mobile-menu fixed inset-y-0 left-0 w-4/5 max-w-sm z-50 transform ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
          style={{ backgroundColor: 'var(--slider-track-color)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setShowMobileMenu(false)}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] -mt-10">
            <ul className="flex flex-col items-center gap-4 justify-center text-white text-lg font-medium">
              <NavLink
              to="/"
              onClick={() => setShowMobileMenu(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive ? 'text-blue-500' : ''

                }`}
              >Home
              </NavLink>
              <NavLink
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive ? 'text-blue-500' : ''

                }`}
              >About
              </NavLink>
              <NavLink
              to="/services"
              onClick={() => setShowMobileMenu(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive ? 'text-blue-500' : ''

                }`}
              >Services
              </NavLink>
              <NavLink
              to="/for-business"
              onClick={() => setShowMobileMenu(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive ? 'text-blue-500' : ''

                }`}
              >For Business
              </NavLink>
              <NavLink
              to="/contact"
              onClick={() => setShowMobileMenu(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive ? 'text-blue-500' : ''

                }`}
              >Contact
              </NavLink>
            </ul>
            
            {/* Mobile Button */}
            <div className="flex justify-center pb-8">
              <button 
                className="px-6 py-2 rounded-full"
                style={{ 
                  backgroundColor: 'var(--nav-button-bg)',
                  color: 'var(--nav-button-text-color)'
                }}
                onClick={() => setShowMobileMenu(false)}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar