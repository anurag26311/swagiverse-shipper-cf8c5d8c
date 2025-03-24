
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KittingComponent from '@/components/Kitting';
import CallToAction from '@/components/CallToAction';

const Kitting = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10">Kitting Services</h1>
        <KittingComponent />
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">The Power of Custom Kitting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1611504652838-9d4e651b8f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Custom branded unboxing experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                First impressions matter. Our custom kitting services allow you to create memorable unboxing experiences
                that reflect your brand's personality and values. From the outer packaging to the inner details,
                every element can be customized to tell your story.
              </p>
              <p className="text-lg">
                Whether you're shipping welcome kits to new clients, conference swag to attendees, or appreciation
                packages to employees, our kitting services ensure a cohesive, high-quality presentation that enhances
                the perceived value of your branded merchandise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Kitting;
