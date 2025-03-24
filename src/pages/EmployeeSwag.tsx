
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmployeeSwagComponent from '@/components/EmployeeSwag';
import CallToAction from '@/components/CallToAction';

const EmployeeSwag = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10">Employee Swag</h1>
        <EmployeeSwagComponent />
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Why Employee Swag Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="text-lg mb-6">
                Employee swag does more than just put your logo on merchandise—it creates a sense of belonging and appreciation. 
                By creating high-quality items that your team members actually want to use, you strengthen your company culture and 
                boost morale.
              </p>
              <p className="text-lg">
                Whether you're welcoming new hires, celebrating work anniversaries, or showing appreciation during difficult times,
                our employee swag solutions ensure your team feels valued and connected to your brand.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1565236752527-75319525c6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Happy employees with branded merchandise" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default EmployeeSwag;
