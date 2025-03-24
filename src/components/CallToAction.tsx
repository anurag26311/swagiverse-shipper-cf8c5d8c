
const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-100/80 to-brand-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading mb-6 max-w-3xl mx-auto">
          Ready to get started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We make the sourcing, management, and distribution of swag incredibly easy.
        </p>
        <a 
          href="#contact" 
          className="hero-button bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg"
        >
          Get A Demo
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
