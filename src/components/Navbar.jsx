import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Settings, Mail, GraduationCap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      setIsScrolled(window.scrollY > 5);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {id:1, name: 'Home', icon: Home, href: '/' },
    {id:2, name: 'About', icon: User, href: '/about' },
    {id:3, name: 'Services', icon: Settings, href: '/services' },
    {id:4, name: 'Classes', icon: GraduationCap, href: '/classes' },
    {id:5, name: 'Contact', icon: Mail, href: '/contact' },
  ];

  return (
    <div>
      <nav 
       className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 shadow-md ${
          isMenuOpen
            ? 'bg-gray-900 backdrop-blur-md'  
            : isScrolled 
              ? 'bg-gray-900/70 backdrop-blur-md' 
              : 'bg-transparent backdrop-blur-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
          <div className="flex-shrink-0">
            <div to="/" className="flex items-center space-x-2">
              <div className="p-1 rounded-full overflow-hidden w-10 h-10">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="bg-black w-full h-full object-cover rounded-full"
                />
              </div>
             <span className="font-bold text-xl tracking-tight text-white">BMPA</span>
            </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <NavLink
                    key={item.id}
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`
                    }
                  >
                    <IconComponent className="h-5 w-5 mr-2" />
                    <span>{item.name}</span>
                  </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className= "-mr-2 flex md:hidden" >
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-800/60 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-gray-900/90 backdrop-blur-md px-4 pb-4 overflow-hidden"
            >
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="pt-4 space-y-1"
              >
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <NavLink
                      key={item.id}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                          isActive
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`
                      }
                    >
                      <IconComponent className="h-5 w-5 mr-3" />
                      <span>{item.name}</span>
                    </NavLink>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

     
    </div>
  );
};

export default Navbar;