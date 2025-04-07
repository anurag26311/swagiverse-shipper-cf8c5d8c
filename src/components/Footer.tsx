import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
              <svg
                className="w-8 h-8 mr-2 text-brand-400"
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
              <span className="text-2xl font-bold">ReWorks</span>
            </Link>
            <p className="text-gray-300 mb-6 pr-8">
              Our swag management platform simplifies the buying, managing, and distribution of swag and branded merchandise. We help businesses create meaningful connections.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} className="text-gray-300" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-gray-300" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} className="text-gray-300" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-brand-400 mr-3 mt-0.5" />
                <span className="text-gray-300">contact@reworks.in</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-brand-400 mr-3 mt-0.5" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-400 mr-3 mt-0.5" />
                <span className="text-gray-300">40/3, Naini Industrial Area, ITI Colony, Sandwa, Prayagraj, Uttar Pradesh, 211010</span>
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Swag Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/catalogue" className="text-gray-300 hover:text-white transition-colors hover:underline">Swag Catalogue</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors hover:underline">Solutions</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors hover:underline">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors hover:underline">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:underline">Contact</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors hover:underline">Help Center</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors hover:underline">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors hover:underline">Refund Policy</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-300 hover:text-white transition-colors hover:underline">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ReWorks. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms-of-use" className="text-gray-400 text-sm hover:text-white transition-colors">Terms</Link>
              <Link to="/careers" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</Link>
              <Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
