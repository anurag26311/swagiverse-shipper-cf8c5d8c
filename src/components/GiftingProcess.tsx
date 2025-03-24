
import { Link, Package, BarChart3 } from 'lucide-react';

const GiftingProcess = () => {
  const steps = [
    {
      icon: <Link size={28} className="text-brand-600" />,
      title: "Your Giveaway Link",
      description: "Create link to a branded gifting offer page. You can customize this page with your company's look and feel.",
      bgColor: "bg-brand-100",
    },
    {
      icon: <Package size={28} className="text-emerald-600" />,
      title: "Send Swags",
      description: "The recipient selects their gift, then enters their own shipping address, and enters the coupon code to claim swag.",
      bgColor: "bg-emerald-100",
    },
    {
      icon: <BarChart3 size={28} className="text-amber-600" />,
      title: "Get Detailed Reports",
      description: "ReWorks then handles all the shipping from there! You also have access to redemption data, allowing you to see who has redeemed what.",
      bgColor: "bg-amber-100",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-border p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex flex-col"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${step.bgColor}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {/* Connector lines for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftingProcess;
