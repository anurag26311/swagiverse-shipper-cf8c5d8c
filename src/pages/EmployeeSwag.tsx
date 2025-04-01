
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmployeeSwagComponent from '@/components/EmployeeSwag';
import CallToAction from '@/components/CallToAction';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const EmployeeSwag = () => {
  // Gallery images for swag showcase
  const swagGallery = [
    {
      src: "https://images.unsplash.com/photo-1533750446969-255bbf191920",
      alt: "Branded notebooks and planners"
    },
    {
      src: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd",
      alt: "Branded t-shirts and apparel"
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
                src="https://images.unsplash.com/photo-1565236752527-75319525c6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Happy employees with branded merchandise" 
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
