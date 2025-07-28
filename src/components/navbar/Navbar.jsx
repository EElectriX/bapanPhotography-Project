import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, User, Settings, Mail } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'About', icon: User, href: '#' },
    { name: 'Services', icon: Settings, href: '#' },
    { name: 'Contact', icon: Mail, href: '#' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <div className="logo-container">
                <div className="logo-icon">
                  <span className="logo-text">L</span>
                </div>
                <span className="logo-title">
                  Logo
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                  >
                    <IconComponent size={16} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Dark Mode Toggle & Mobile Menu Button */}
            <div className="navbar-controls">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="theme-toggle"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="hamburger-button menu-button"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-bg">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      
    </>
  );
}