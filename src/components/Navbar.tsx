
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

const NavMenuLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors"
  >
    {children}
  </Link>
);

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
        isScrolled ? 'py-3 bg-white shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-700 flex items-center">
          <svg
            className="w-8 h-8 mr-2 text-brand-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 8.5V13.5C20 17.5 18 19.5 14 19.5H10C6 19.5 4 17.5 4 13.5V10C4 6 6 4 10 4H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4.5L14 6.5L16 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 4.5L17 6.5L19 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 11C13 9.9 12.1 9 11 9C9.9 9 9 9.9 9 11C9 12.1 9.9 13 11 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 13C11 14.1 11.9 15 13 15C14.1 15 15 14.1 15 13C15 11.9 14.1 11 13 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          ReWorks
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Swag Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-50 to-brand-100 p-6 no-underline outline-none focus:shadow-md"
                          to="/swag-platform"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Swag Management Platform
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Our complete swag management solution for businesses of all sizes
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link
                        to="/employee-swag"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Employee Swag</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Send branded gifts to your employees worldwide
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/kitting"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Kitting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Create branded unboxing experiences
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/catalogue"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Swag Catalogue</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse our collection of customizable products
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px]">
                    <li>
                      <Link
                        to="/solutions#enterprise"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Enterprise</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Custom solutions for large organizations
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/solutions#startup"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Startups</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Flexible solutions for growing companies
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/solutions#agencies"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Agencies</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Help your clients with branded merchandise
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/solutions#events"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Events</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Create memorable event experiences
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/features" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-50")}>
                  Features
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-50")}>
                  Pricing
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/contact">
            <Button className="ml-4 bg-brand-600 hover:bg-brand-700">
              Get A Demo
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden text-foreground" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[90vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          {/* Collapsible Sub-Menus for Mobile */}
          <div className="border-b border-gray-100 pb-4">
            <div className="flex justify-between items-center py-2" onClick={() => {
              const el = document.getElementById('swag-submenu');
              if (el) el.classList.toggle('hidden');
            }}>
              <span className="font-medium">Swag Platform</span>
              <ChevronDown size={16} />
            </div>
            <div id="swag-submenu" className="hidden pl-4 mt-2 space-y-2">
              <NavMenuLink to="/swag-platform">Overview</NavMenuLink>
              <NavMenuLink to="/employee-swag">Employee Swag</NavMenuLink>
              <NavMenuLink to="/kitting">Kitting</NavMenuLink>
              <NavMenuLink to="/catalogue">Swag Catalogue</NavMenuLink>
            </div>
          </div>
          
          <div className="border-b border-gray-100 pb-4">
            <div className="flex justify-between items-center py-2" onClick={() => {
              const el = document.getElementById('solutions-submenu');
              if (el) el.classList.toggle('hidden');
            }}>
              <span className="font-medium">Solutions</span>
              <ChevronDown size={16} />
            </div>
            <div id="solutions-submenu" className="hidden pl-4 mt-2 space-y-2">
              <NavMenuLink to="/solutions#enterprise">Enterprise</NavMenuLink>
              <NavMenuLink to="/solutions#startup">Startups</NavMenuLink>
              <NavMenuLink to="/solutions#agencies">Agencies</NavMenuLink>
              <NavMenuLink to="/solutions#events">Events</NavMenuLink>
            </div>
          </div>
          
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
