
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Building, Users, Rocket, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative py-24 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About ReWorks</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're transforming how businesses manage and distribute branded merchandise.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At ReWorks, we're on a mission to simplify swag management for businesses of all sizes. 
              We believe that branded merchandise should be easy to source, manage, and distribute, 
              without the logistical headaches.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform provides end-to-end solutions from custom branding and warehousing to 
              global fulfillment and detailed analytics, all while maintaining the highest quality standards.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-brand-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">Founded in 2020</p>
              <p>Global reach, local impact</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                We prioritize your needs and are committed to providing exceptional service at every step.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to eco-friendly practices and responsible sourcing of all our merchandise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Rocket className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our platform and offerings to stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about delivering exceptional experiences.
          </p>
          <Link to="/careers">
            <Button size="lg" className="font-medium">
              View Open Positions
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
