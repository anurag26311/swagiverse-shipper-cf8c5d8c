
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmployeeSwagComponent from '@/components/EmployeeSwag';
import CallToAction from '@/components/CallToAction';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const EmployeeSwag = () => {
  // Gallery images for swag showcase
  const swagGallery = [
    {
      src: "/lovable-uploads/10316d30-7ffc-4399-8a27-5dec3778f2f0.png",
      alt: "Seasonal Swag For Holiday Cheer - Branded hoodies and accessories"
    },
    {
      src: "/lovable-uploads/73f4f357-397d-440c-8a2f-c0f9deeafa4e.png",
      alt: "Personalized Lanyards For Professionalism"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Branded employee swag items"
    },
    {
      src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
      alt: "Custom branded water bottles"
    },
    {
      src: "https://images.unsplash.com/photo-1581088577573-3d613066d2d7",
      alt: "Premium branded tote bags"
    },
    {
      src: "https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b",
      alt: "Custom branded tech accessories"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10">Employee Swag</h1>
        <EmployeeSwagComponent />
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Why Employee Swag Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="text-lg mb-6">
                Employee swag does more than just put your logo on merchandise—it creates a sense of belonging and appreciation. 
                By creating high-quality items that your team members actually want to use, you strengthen your company culture and 
                boost morale.
              </p>
              <p className="text-lg">
                Whether you're welcoming new hires, celebrating work anniversaries, or showing appreciation during difficult times,
                our employee swag solutions ensure your team feels valued and connected to your brand.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/10316d30-7ffc-4399-8a27-5dec3778f2f0.png" 
                alt="Holiday themed branded swag items" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-6">Our Swag Collection</h2>
          <p className="text-lg text-muted-foreground mb-12">Browse our extensive collection of customizable items perfect for your team</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {swagGallery.map((item, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
                <div className="p-4 bg-white">
                  <h3 className="font-medium text-lg">{item.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default EmployeeSwag;
