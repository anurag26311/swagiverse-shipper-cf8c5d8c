
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Kitting = () => {
  return (
    <section className="py-20 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1607435097405-db48f377bff6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Custom kitting and branded boxes" 
                className="w-full h-full object-cover lazy-image loaded"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24 bg-purple-100 rounded-full opacity-60 animate-pulse-soft"></div>
            <div className="hidden lg:block absolute -top-8 -left-8 w-16 h-16 bg-amber-100 rounded-full opacity-60 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
          </div>
          
          <div>
            <h2 className="section-heading mb-6">
              <span className="text-purple-600">Kitting</span> for remarkable unboxing experiences
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              You can create attractive branded unboxing experiences with custom kitting. Customize the outside and inside of a box with your company's logo, then select from a variety of filler options and inserts to showcase your merchandise to its maximum potential!
            </p>
            <Link to="/kitting" className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 transition-colors">
              Read More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kitting;
