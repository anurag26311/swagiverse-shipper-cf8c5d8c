
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">ReWorks</h3>
            <p className="text-gray-300 mb-6">
              Our swag management platform simplifies the buying, managing, and distribution of swag and branded merchandise.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#linkedin" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Swag Platform</h4>
            <ul className="space-y-3">
              <li><a href="#catalogue" className="text-gray-300 hover:text-white transition-colors">Swag Catalogue</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ReWorks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
