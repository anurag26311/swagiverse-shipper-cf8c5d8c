
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-700">
          ReWorks
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/swag-platform" className="link-with-underline font-medium">Swag Platform</Link>
          <Link to="/solutions" className="link-with-underline font-medium">Solutions</Link>
          <Link to="/features" className="link-with-underline font-medium">Features</Link>
          <Link to="/pricing" className="link-with-underline font-medium">Pricing</Link>
          <Link to="/contact" className="hero-button bg-brand-600 text-white hover:bg-brand-700">
            Get A Demo
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          <Link to="/swag-platform" onClick={closeMenu} className="font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">Swag Platform</Link>
          <Link to="/solutions" onClick={closeMenu} className="font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">Solutions</Link>
          <Link to="/features" onClick={closeMenu} className="font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">Features</Link>
          <Link to="/pricing" onClick={closeMenu} className="font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">Pricing</Link>
          <Link to="/contact" onClick={closeMenu} className="hero-button bg-brand-600 text-white hover:bg-brand-700 w-full flex justify-center">
            Get A Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
