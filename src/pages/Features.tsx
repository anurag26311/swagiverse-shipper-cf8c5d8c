
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesComponent from '@/components/Features';

const Features = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Features</h1>
        <FeaturesComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
