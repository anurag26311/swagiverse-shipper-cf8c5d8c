
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 50 swag items/month",
        "Basic branding options",
        "Email support"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Pro",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 200 swag items/month",
        "Advanced branding customization",
        "Priority support",
        "Basic analytics"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited swag items",
        "Full branding suite",
        "Dedicated account manager",
        "Advanced reporting",
        "Global shipping"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Flexible Pricing for Every Need
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-500"
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src={plan.image} 
                    alt={`${plan.name} plan`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Choose {plan.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
