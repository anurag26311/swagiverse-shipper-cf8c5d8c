
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular = false,
  annualBilling = true
}) => {
  const annualPrice = price;
  const monthlyPrice = Math.round(price * 1.2);
  const displayPrice = annualBilling ? annualPrice : monthlyPrice;
  
  return (
    <div className={`rounded-xl p-8 border ${popular ? 'border-brand-500 shadow-lg' : 'border-gray-200'} relative h-full flex flex-col`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mb-5">
        <span className="text-4xl font-bold">${displayPrice}</span>
        <span className="text-muted-foreground ml-2">{annualBilling ? '/year' : '/month'}</span>
        {annualBilling && (
          <p className="text-sm text-brand-600 mt-1">Save {Math.round(((monthlyPrice * 12) - annualPrice) / (monthlyPrice * 12) * 100)}% with annual billing</p>
        )}
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full ${popular ? 'bg-brand-600 hover:bg-brand-700' : ''}`}
        variant={popular ? 'default' : 'outline'}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-brand-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that works best for your business needs
            </p>
            <Tabs defaultValue="annual" className="w-64 mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="annual" onClick={() => setAnnualBilling(true)}>Annual</TabsTrigger>
                <TabsTrigger value="monthly" onClick={() => setAnnualBilling(false)}>Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            title="Starter"
            price={1499}
            description="Perfect for small teams just getting started with swag management"
            features={[
              "Up to 100 swag items per month",
              "Basic analytics dashboard",
              "Email support",
              "1 warehouse location",
              "Standard shipping options"
            ]}
            buttonText="Get Started"
            annualBilling={annualBilling}
          />
          <PricingCard
            title="Business"
            price={2999}
            description="Ideal for growing businesses with regular swag needs"
            features={[
              "Up to 500 swag items per month",
              "Advanced analytics & reporting",
              "Priority email & phone support",
              "3 warehouse locations",
              "Express shipping options",
              "Custom branding options",
              "Inventory management"
            ]}
            buttonText="Get Started"
            popular={true}
            annualBilling={annualBilling}
          />
          <PricingCard
            title="Enterprise"
            price={4999}
            description="For large organizations with complex swag requirements"
            features={[
              "Unlimited swag items",
              "Custom analytics & reporting",
              "24/7 dedicated support",
              "Global warehouse network",
              "Premium shipping options",
              "Advanced customization",
              "Multi-team accounts",
              "API access",
              "Dedicated account manager"
            ]}
            buttonText="Contact Sales"
            annualBilling={annualBilling}
          />
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer tailored plans for businesses with specific requirements. 
              Our team will work with you to create a custom solution that fits your needs.
            </p>
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Contact Our Sales Team
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Is there a free trial available?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day free trial for all plans. No credit card required to start your trial.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">What happens if I exceed my monthly limit?</h3>
              <p className="text-muted-foreground">
                If you exceed your monthly limit, you'll be charged a small fee for each additional item. We'll always notify you before you reach your limit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
