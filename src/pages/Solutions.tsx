
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Globe, BarChart3 } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Package className="w-12 h-12 text-brand-600" />,
      title: "Enterprise Swag Management",
      description: "Streamline swag distribution for large organizations with our scalable platform.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-600" />,
      title: "Global Fulfillment",
      description: "Ship branded merchandise to teams and clients worldwide with ease and efficiency.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-amber-600" />,
      title: "Performance Tracking",
      description: "Gain insights into swag distribution, usage, and impact with advanced analytics.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Comprehensive Swag Solutions
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                {solution.icon}
                <CardTitle className="mt-4">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
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

export default Solutions;
