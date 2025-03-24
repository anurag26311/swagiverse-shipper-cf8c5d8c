
const Benefits = () => {
  const benefits = [
    {
      title: "Limitless Sending",
      description: "possibilities with memorable Physical Impressions",
      textColor: "text-brand-700",
      borderColor: "border-brand-200",
    },
    {
      title: "Worldwide Fulfilment",
      description: "and inventory management via global warehouses",
      textColor: "text-coral-700",
      borderColor: "border-coral-200",
    },
    {
      title: "Intelligent Analytics",
      description: "and reporting with the Analytics Dashboards and Send Tracker",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
    },
    {
      title: "Scalable",
      description: "across teams and budgets with department-specific sending",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
    },
  ];

  const additionalBenefits = [
    {
      title: "Offers",
      description: "Get personalised swag recommendations for your specific needs from our merch specialists.",
    },
    {
      title: "Support",
      description: "Get help choosing gear, launching campaigns, and optimising them from a specialised customer success team.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          Everything You Need, All in One Platform
        </h2>
        
        {/* Main benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl border-2 ${benefit.borderColor} bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]`}
            >
              <h3 className={`text-xl font-bold mb-2 ${benefit.textColor}`}>{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional benefits */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Additional benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl bg-gray-50 flex flex-col transition-all duration-300 hover:bg-gray-100"
              >
                <h4 className="text-xl font-semibold mb-4">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
