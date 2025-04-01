
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SwagPlatform = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Streamline Your Swag Management
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive platform designed to simplify swag ordering, tracking, and distribution for modern businesses.
          </p>
          <Link to="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              All-in-One Swag Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our platform offers a seamless experience from design to delivery. Manage your entire swag inventory, track shipments, and create personalized kits with just a few clicks.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="mr-3 text-brand-600">✓</span>
                Real-time inventory tracking
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-600">✓</span>
                Global shipping capabilities
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-600">✓</span>
                Custom branding options
              </li>
            </ul>
          </div>
          <div>
            <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Swag Management Platform" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SwagPlatform;
