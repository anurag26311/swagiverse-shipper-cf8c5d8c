
import { ArrowRight } from 'lucide-react';

const EmployeeSwag = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-heading mb-6">
              <span className="text-brand-600">Employee swag</span> that delights and connects
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Send high-quality branded gifts to all of your staff, regardless of their location. You can brand thousands of products, including high-end retail items, clothes, and drinkware.
            </p>
            <a href="#learn-more" className="inline-flex items-center font-medium text-brand-600 hover:text-brand-700 transition-colors">
              Read More
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f147?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Employee swag items" 
                className="w-full h-full object-cover lazy-image loaded"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-24 h-24 bg-brand-100 rounded-full opacity-60 animate-pulse-soft"></div>
            <div className="hidden lg:block absolute -top-8 -right-8 w-16 h-16 bg-coral-100 rounded-full opacity-60 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeSwag;
