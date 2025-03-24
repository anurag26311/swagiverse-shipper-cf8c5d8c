
import { Printer, Package, Globe, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Printer size={24} className="text-brand-600" />,
      title: "Customised Printing",
      description: "One stop solution for ordering and managing swags.",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Package size={24} className="text-coral-600" />,
      title: "Warehouse Storage",
      description: "ReWorks keeps all of your gear, in our warehousing facility.",
      bgColor: "bg-coral-50",
    },
    {
      icon: <Globe size={24} className="text-emerald-600" />,
      title: "Global Shipment",
      description: "We can ship it anywhere in the world using a variety of shipping methods.",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <BarChart3 size={24} className="text-amber-600" />,
      title: "Intelligent Analytics",
      description: "Get access to swag spend reporting, when to reorder, and more.",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card hover:shadow-lg"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`feature-icon-container ${feature.bgColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
