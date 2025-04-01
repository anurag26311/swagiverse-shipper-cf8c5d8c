
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Printer, Package, Globe, BarChart3 } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <Printer className="w-12 h-12 text-brand-600" />,
      title: "Custom Printing",
      description: "High-quality, personalized branding for every item.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: <Package className="w-12 h-12 text-coral-600" />,
      title: "Warehouse Storage",
      description: "Secure, climate-controlled storage for your branded merchandise.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-600" />,
      title: "Global Shipping",
      description: "Seamless international shipping to anywhere in the world.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-amber-600" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and insights into your swag distribution.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Features That Empower Your Swag Strategy
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="flex flex-row items-center space-x-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
