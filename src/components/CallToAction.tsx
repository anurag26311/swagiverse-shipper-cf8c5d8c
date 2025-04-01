
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-100/80 to-brand-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading mb-6 max-w-3xl mx-auto">
          Ready to get started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We make the <Link to="/features" className="text-brand-600 hover:underline">sourcing</Link>, <Link to="/about" className="text-brand-600 hover:underline">management</Link>, and <Link to="/solutions" className="text-brand-600 hover:underline">distribution</Link> of swag incredibly easy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact" 
            className="hero-button bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg"
          >
            Get A Demo
          </Link>
          <Link 
            to="/catalogue" 
            className="hero-button bg-white border border-border hover:bg-gray-50"
          >
            Browse Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
